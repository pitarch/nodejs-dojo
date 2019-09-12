// https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

const fixtures = [
  {
    data: [[3, 1], [5, 2, 8], 10],
    expected: 9,
  },
];

const testCases = fixtures.map(fixture => [...fixture.data, fixture.expected]);

test.each(testCases)(
  'getMoneySpent(%o, %o, %d) => %d',
  (keyboards, drivers, budget, expected) => {
    expect(getMoneySpent(keyboards, drivers, budget)).toEqual(expected);
  },
);

/**
 * @param {Array.<Number>} keyboards array of keyboard prices
 * @param {Array.<Number>} drivers array of drive prices
 * @param {Number} budget
 */
function getMoneySpent(keyboards, drivers, budget) {
  let max = -1;
  keyboards.forEach(keyboard => {
    drivers.forEach(driver => {
      let total = keyboard + driver;
      if (total <= budget && total > max) {
        console.log(`keyboard = ${keyboard}, drive = ${driver}`);
        max = total;
      }
    });
  });

  return max;
}
