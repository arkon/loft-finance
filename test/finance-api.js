import { test } from 'ava';
import api from '../server/modules/finance-api';

test('Returns JSON for valid symbol', async t => {
  t.true(typeof await api('AAPL') === 'object');
});

// TODO: more tests
