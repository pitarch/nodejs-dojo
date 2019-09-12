import { fn } from '../src/kata'
// https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

const fixtures:[number[], number[], number, number][] = [
  [[3, 1], [5, 2, 8], 10, 9]
] 


test.each(fixtures)(
  'getMoneySpent(%o, %o, %d) => %d',
  (keyboards, drivers, budget, expected) => {
    expect(fn(keyboards, drivers, budget)).toEqual(expected);
  },
);

