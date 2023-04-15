/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '@backstage/catalog-model';
import {
  CatalogApi,
  EntityPresentationApi,
  EntityRefPresentation,
} from '@backstage/plugin-catalog-react';
import { HumanDuration } from '@backstage/types';
import DataLoader from 'dataloader';
import ExpiryMap from 'expiry-map';
import get from 'lodash/get';

const DEFAULT_CACHE_TTL: HumanDuration = { seconds: 30 };
const DEFAULT_BATCH_DELAY: HumanDuration = { milliseconds: 50 };
const DEFAULT_ENTITY_FIELDS = [
  'kind',
  'metadata.name',
  'metadata.namespace',
  'metadata.title',
  'spec.profile',
];

/**
 * Options for the {@link DefaultEntityPresentationApi}.
 *
 * @public
 */
export interface DefaultEntityPresentationApiOptions {
  /**
   * The catalog API to use.
   */
  catalogApi: CatalogApi;

  /**
   * When to expire entities that have been loaded from the catalog API and
   * cached for a while.
   *
   * @defaultValue 30 seconds
   * @remarks
   *
   * The higher this value, the lower the load on the catalog API, but also the
   * higher the risk of users seeing stale data.
   */
  cacheTtl?: HumanDuration;

  /**
   * For how long to wait before sending a batch of entity references to the
   * catalog API.
   *
   * @defaultValue 50 milliseconds
   * @remarks
   *
   * The higher this value, the greater the chance of batching up requests from
   * across a page, but also the longer the lag time before displaying accurate
   * information.
   */
  batchDelay?: HumanDuration;

  /**
   * Custom presentation.
   */
  presentation?: {
    /**
     * An extra set of fields to request for entities from the catalog API.
     *
     * @remarks
     *
     * If you supply custom representation functions, you may want to specify
     * this to get additional entity fields. The smaller the set of fields, the
     * more efficient requests will be to the catalog backend.
     *
     * The default set of fields is: kind, metadata.name, metadata.namespace,
     * metadata.title, and spec.profile.
     */
    extraFields?: string[];

    /**
     *
     */
    render: (options: {
      entityRef: string;
      variant?: string;
      catalogEntity: () => Promise<Entity | undefined>;
    }) => Promise<EntityRefPresentation>;
  };
}

/**
 * Default implementation of the {@link @backstage/plugin-catalog-react#EntityPresentationApi}.
 *
 * @public
 */
export class DefaultEntityPresentationApi implements EntityPresentationApi {
  readonly #loader: DataLoader<string, Entity | undefined>;
  readonly #render: (options: {
    entityRef: string;
    variant?: string;
    catalogEntity: () => Promise<Entity | undefined>;
  }) => Promise<EntityRefPresentation>;

  constructor(options: DefaultEntityPresentationApiOptions) {
    this.#loader = this.#createLoader(options);
    this.#render =
      options.presentation?.render ?? defaultSimpleStringRepresentation;
  }

  async renderEntityRef(options: {
    entityRef: string;
    variant?: string;
  }): Promise<EntityRefPresentation> {
    try {
      return this.#render({
        entityRef: options.entityRef,
        variant: options.variant,
        catalogEntity: () => this.#load(options.entityRef),
      });
    } catch {
      return {
        entityRef: options.entityRef,
        primaryTitle: options.entityRef,
      };
    }
  }

  async #load(entityRef: string): Promise<Entity | undefined> {
    try {
      return await this.#loader.load(entityRef);
    } catch {
      return undefined;
    }
  }

  #createLoader(
    options: DefaultEntityPresentationApiOptions,
  ): DataLoader<string, Entity | undefined> {
    const cacheTtl = durationToMs(options.cacheTtl ?? DEFAULT_CACHE_TTL);
    const batchDelay = durationToMs(options.batchDelay ?? DEFAULT_BATCH_DELAY);
    const entityFields = [
      ...new Set(
        [DEFAULT_ENTITY_FIELDS, options.presentation?.extraFields || []].flat(),
      ),
    ];

    return new DataLoader(
      async (entityRefs: readonly string[]) => {
        const { items } = await options.catalogApi.getEntitiesByRefs({
          entityRefs: entityRefs as string[],
          fields: entityFields,
        });
        return items;
      },
      {
        cacheMap: new ExpiryMap(cacheTtl),
        batchScheduleFn: cb => setTimeout(cb, batchDelay),
      },
    );
  }
}

function durationToMs(duration: HumanDuration): number {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
  } = duration;

  const totalDays = years * 365 + months * 30 + weeks * 7 + days;
  const totalHours = totalDays * 24 + hours;
  const totalMinutes = totalHours * 60 + minutes;
  const totalSeconds = totalMinutes * 60 + seconds;
  const totalMilliseconds = totalSeconds * 1000 + milliseconds;

  return totalMilliseconds;
}

async function defaultSimpleStringRepresentation(options: {
  entityRef: string;
  variant?: string;
  catalogEntity: () => Promise<Entity | undefined>;
}): Promise<EntityRefPresentation> {
  const entity = await options.catalogEntity();
  if (!entity) {
    return {
      entityRef: options.entityRef,
      primaryTitle: options.entityRef,
    };
  }

  const title = [
    get(entity, 'spec.profile.displayName'),
    get(entity, 'metadata.title'),
    get(entity, 'metadata.name'),
    options.entityRef,
  ].filter(candidate => candidate && typeof candidate === 'string')[0]!;

  return {
    entityRef: options.entityRef,
    primaryTitle: title,
  };

  /*
    let kind;
    let namespace;
    let name;

    if (typeof entityRef === 'string') {
      const parsed = parseEntityRef(entityRef);
      kind = parsed.kind;
      namespace = parsed.namespace;
      name = parsed.name;
    } else if ('metadata' in entityRef) {
      kind = entityRef.kind;
      namespace = entityRef.metadata.namespace;
      name = entityRef.metadata.name;
    } else {
      kind = entityRef.kind;
      namespace = entityRef.namespace;
      name = entityRef.name;
    }

    kind = kind.toLocaleLowerCase('en-US');
    namespace = namespace?.toLocaleLowerCase('en-US') ?? DEFAULT_NAMESPACE;

    const formattedEntityRefTitle = humanizeEntityRef(
      { kind, namespace, name },
      { defaultKind },
    );
  */
}
