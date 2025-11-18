

import { expect, it, describe } from 'vitest';
import { formatPrice } from './money';


// a test suite/ a unit test (meant to be created for each function)
describe('formatPrice', () => {
  it('reformats 4800 cents as $48.00', () => {
  expect(formatPrice(4800)).toBe('$48.00');
  });
  it('display dollar sign', () => {
  expect(formatPrice(1200)).toBe('$12.00')
  });
});

// a single test
it('displays prices with 2 decimals', () => {
  expect(formatPrice(1090)).toBe('$10.90');
  expect(formatPrice(100)).toBe('$1.00');
});