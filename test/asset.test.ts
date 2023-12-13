import { join } from 'path';

import { getExports } from '../src';

test('Get Exports', async () => {
  expect(await getExports(join(__dirname, 'asset.js'))).toStrictEqual(['a', 'b', 'c']);
});
