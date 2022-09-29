## API Report File for "@backstage/plugin-user-settings"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { BackstageUserIdentity } from '@backstage/core-plugin-api';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { ErrorApi } from '@backstage/core-plugin-api';
import { FetchApi } from '@backstage/core-plugin-api';
import { IconComponent } from '@backstage/core-plugin-api';
import { IdentityApi } from '@backstage/core-plugin-api';
import { JsonValue } from '@backstage/types';
import { Observable } from '@backstage/types';
import { ProfileInfo } from '@backstage/core-plugin-api';
import { ProfileInfoApi } from '@backstage/core-plugin-api';
import { PropsWithChildren } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';
import { SessionApi } from '@backstage/core-plugin-api';
import { StorageApi } from '@backstage/core-plugin-api';
import { StorageValueSnapshot } from '@backstage/core-plugin-api';

// @public (undocumented)
export const DefaultProviderSettings: (props: {
  configuredProviders: string[];
}) => JSX.Element;

// @public (undocumented)
export const ProviderSettingsItem: (props: {
  title: string;
  description: string;
  icon: IconComponent;
  apiRef: ApiRef<ProfileInfoApi & SessionApi>;
}) => JSX.Element;

// @public (undocumented)
export const Router: (props: { providerSettings?: JSX.Element }) => JSX.Element;

// @public (undocumented)
export const Settings: (props: { icon?: IconComponent }) => JSX.Element;

// @public (undocumented)
export const USER_SETTINGS_TAB_KEY = 'user-settings.tab';

// @public (undocumented)
export const UserSettingsAppearanceCard: () => JSX.Element;

// @public (undocumented)
export const UserSettingsAuthProviders: (props: {
  providerSettings?: JSX.Element;
}) => JSX.Element;

// @public (undocumented)
export const UserSettingsFeatureFlags: () => JSX.Element;

// @public (undocumented)
export const UserSettingsGeneral: () => JSX.Element;

// @public (undocumented)
export const UserSettingsIdentityCard: () => JSX.Element;

// @public (undocumented)
export const UserSettingsMenu: () => JSX.Element;

// @public (undocumented)
export const UserSettingsPage: (props: {
  providerSettings?: JSX.Element | undefined;
}) => JSX.Element;

// @public (undocumented)
export const UserSettingsPinToggle: () => JSX.Element;

// @public (undocumented)
const userSettingsPlugin: BackstagePlugin<
  {
    settingsPage: RouteRef<undefined>;
  },
  {},
  {}
>;
export { userSettingsPlugin as plugin };
export { userSettingsPlugin };

// @public (undocumented)
export const UserSettingsProfileCard: () => JSX.Element;

// @public (undocumented)
export const UserSettingsSignInAvatar: (props: {
  size?: number;
}) => JSX.Element;

// @public
export class UserSettingsStorage implements StorageApi {
  // (undocumented)
  static create(options: {
    fetchApi: FetchApi;
    discoveryApi: DiscoveryApi;
    errorApi: ErrorApi;
    identityApi: IdentityApi;
    namespace?: string;
  }): UserSettingsStorage;
  // (undocumented)
  forBucket(name: string): StorageApi;
  // (undocumented)
  observe$<T extends JsonValue>(
    key: string,
  ): Observable<StorageValueSnapshot<T>>;
  // (undocumented)
  remove(key: string): Promise<void>;
  // (undocumented)
  set<T extends JsonValue>(key: string, data: T): Promise<void>;
  // (undocumented)
  snapshot<T extends JsonValue>(key: string): StorageValueSnapshot<T>;
}

// @public
export const UserSettingsTab: (props: UserSettingsTabProps) => JSX.Element;

// @public (undocumented)
export type UserSettingsTabProps = PropsWithChildren<{
  path: string;
  title: string;
}>;

// @public (undocumented)
export const UserSettingsThemeToggle: () => JSX.Element;

// @public (undocumented)
export const useUserProfile: () =>
  | {
      profile: ProfileInfo;
      displayName: string;
      loading: boolean;
      backstageIdentity?: undefined;
    }
  | {
      profile: ProfileInfo;
      backstageIdentity: BackstageUserIdentity;
      displayName: string;
      loading: false;
    };
```