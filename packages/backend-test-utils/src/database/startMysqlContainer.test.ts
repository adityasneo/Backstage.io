/*
 * Copyright 2021 The Backstage Authors
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

import createConnection from 'knex';
import { isDockerDisabledForTests } from '../util/isDockerDisabledForTests';
import { startMysqlContainer } from './startMysqlContainer';

const itIfDocker = isDockerDisabledForTests() ? it.skip : it;

jest.setTimeout(60_000);

describe('startMysqlContainer', () => {
  itIfDocker('successfully launches the container', async () => {
    const { stop, ...connection } = await startMysqlContainer('mysql:8');
    const db = createConnection({ client: 'mysql2', connection });
    try {
      const result = await db.select(db.raw('version() AS version'));
      // eslint-disable-next-line jest/no-standalone-expect
      expect(result[0]?.version).toContain('8.');
    } finally {
      await db.destroy();
      await stop();
    }
  });
});
