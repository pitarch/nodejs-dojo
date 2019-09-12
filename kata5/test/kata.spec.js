// https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

const fixtures = [
  {
    data: [
      [1, 2, 4, 'Cat B'],
      [1, 3, 2, 'Mouse C']
    ],
    expected: 9,
  },
];

const testCases = fixtures.map(fixture => [...fixture.data, fixture.expected]);

test.each(testCases)(
  'getMoneySpent(%o, %o, %d) => %d',
  (x, y, z, expected) => {
    expect(catAndMouse(x, y, z)).toEqual(expected);
  },
);

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {

  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  return catA === catB ? 'Mouse C' : (catA > catB ? 'Cat A' : 'Cat B');

}
