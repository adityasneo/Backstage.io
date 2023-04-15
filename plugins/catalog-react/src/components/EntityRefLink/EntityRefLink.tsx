/*
 * Copyright 2020 The Backstage Authors
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

import {
  Entity,
  CompoundEntityRef,
  DEFAULT_NAMESPACE,
  parseEntityRef,
  stringifyEntityRef,
} from '@backstage/catalog-model';
import React, { forwardRef } from 'react';
import { entityRouteRef } from '../../routes';
import { Link, LinkProps } from '@backstage/core-components';
import { useApi, useRouteRef } from '@backstage/core-plugin-api';
import { Tooltip } from '@material-ui/core';
import { entityPresentationApiRef } from '../../apis';
import useAsync from 'react-use/lib/useAsync';

/**
 * Props for {@link EntityRefLink}.
 *
 * @public
 */
export type EntityRefLinkProps = {
  entityRef: Entity | CompoundEntityRef | string;
  defaultKind?: string;
  title?: string;
  children?: React.ReactNode;
} & Omit<LinkProps, 'to'>;

/**
 * Shows a clickable link to an entity.
 *
 * @public
 */
export const EntityRefLink = forwardRef<any, EntityRefLinkProps>(
  (props, ref) => {
    const { entityRef, defaultKind, title, children, ...linkProps } = props;
    const entityRoute = useEntityRoute(props.entityRef);
    const presentationApi = useApi(entityPresentationApiRef);

    const presentation = useAsync(() => {
      return presentationApi.renderEntityRef({
        entityRef:
          typeof entityRef === 'string'
            ? entityRef
            : stringifyEntityRef(entityRef),
      });
    }, [entityRef, presentationApi]);

    const primary = presentation.loading
      ? '...'
      : presentation.value?.primaryTitle || entityRef;
    const secondary = presentation.value?.secondaryTitle;

    const link = (
      <Link {...linkProps} ref={ref} to={entityRoute}>
        {children}
        {!children && (title ?? primary)}
      </Link>
    );

    return secondary ? <Tooltip title={secondary}>{link}</Tooltip> : link;
  },
) as (props: EntityRefLinkProps) => JSX.Element;

// Hook that computes the route to a given entity / ref. This is a bit
// contrived, because it tries to retain the casing of the entity name if
// present, but not of other parts. This is in an attempt to make slightly more
// nice-looking URLs.
function useEntityRoute(
  entityRef: Entity | CompoundEntityRef | string,
): string {
  const entityRoute = useRouteRef(entityRouteRef);

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

  return entityRoute({ kind, namespace, name });
}
