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
 * Tells which cat is the closest to the mouse.
 * @param x position of cat A
 * @param y position of cat B
 * @param z position of mouse C
 */
function catAndMouse(x: number, y: number, z: number): string {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  return catA === catB ? "Mouse C" : catA > catB ? "Cat A" : "Cat B";
}

const testCases = fixtures.map(
  fixture =>
    [fixture.data[0], fixture.data[1], fixture.data[2], fixture.expected] as [
      number,
      number,
      number,
      string
    ]
);

describe("getMoneySpent", () => {
  test.each(testCases)("[%i, %i, %i] => %s", (x, y, z, expected) => {
    expect(catAndMouse(x, y, z)).toEqual(expected);
  });
});
