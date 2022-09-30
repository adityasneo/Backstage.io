## API Report File for "@backstage/plugin-catalog-backend-module-gitlab"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { CatalogProcessor } from '@backstage/plugin-catalog-backend';
import { CatalogProcessorEmit } from '@backstage/plugin-catalog-backend';
import { Config } from '@backstage/config';
import { EntityProvider } from '@backstage/plugin-catalog-backend';
import { EntityProviderConnection } from '@backstage/plugin-catalog-backend';
import { LocationSpec } from '@backstage/plugin-catalog-backend';
import { Logger } from 'winston';
import { TaskRunner } from '@backstage/backend-tasks';

// @public
export class GitlabDiscoveryEntityProvider implements EntityProvider {
  // (undocumented)
  connect(connection: EntityProviderConnection): Promise<void>;
  // (undocumented)
  static fromConfig(
    config: Config,
    options: {
      logger: Logger;
      schedule: TaskRunner;
    },
  ): GitlabDiscoveryEntityProvider[];
  // (undocumented)
  getProviderName(): string;
  // (undocumented)
  refresh(logger: Logger): Promise<void>;
}

// @public
export class GitLabDiscoveryProcessor implements CatalogProcessor {
  // (undocumented)
  static fromConfig(
    config: Config,
    options: {
      logger: Logger;
      skipReposWithoutExactFileMatch?: boolean;
    },
  ): GitLabDiscoveryProcessor;
  // (undocumented)
  getProcessorName(): string;
  // (undocumented)
  readLocation(
    location: LocationSpec,
    _optional: boolean,
    emit: CatalogProcessorEmit,
  ): Promise<boolean>;
}
```