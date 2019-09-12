// https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

const fixtures = [
  {
    data: [1, 2, 4],
    expected: "Cat A"
  },
  {
    data: [1, 3, 2],
    expected: "Mouse C"
  }
];

/**
 * tell which cat is the closest to a mouse
 *
 * @param {string} x position of cat A
 * @param {string} y position of cat B
 * @param {string} z position of Mouse C
 * @returns {string}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  return catA === catB ? "Mouse C" : catA > catB ? "Cat A" : "Cat B";
}

const testCases = fixtures.map(fixture => [...fixture.data, fixture.expected]);

describe("getMoneySpent", () => {
  test.each(testCases)(
    "cat A: %d, cat B: %d, mouse: %d => %s",
    (x, y, z, expected) => {
      expect(catAndMouse(x, y, z)).toEqual(expected);
    }
  );
});
