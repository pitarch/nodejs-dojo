import { fn } from '../src/kata'

const fixtures = [
  {
    data: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 2],
    expected: [3, 4, 5, 6, 7, 8, 9, 1, 2],
  },
  {
    data: [[1], 1],
    expected: [1],
  },
  {
    data: [[1, 2], 1],
    expected: [2, 1],
  },
  {
    data: [[1, 2, 3], 1],
    expected: [2, 3, 1],
  },
  {
    data: [[1, 2, 3, 4, 5], 4],
    expected: [5, 1, 2, 3, 4],
  },
  {
    data: [[1, 2, 3, 4], 4],
    expected: [1, 2, 3, 4],
  },
  {
    data: [[1, 2, 3, 4], 2],
    expected: [3, 4, 1, 2],
  },
  {
    data: [[1, 2, 3, 4, 5], 2],
    expected: [3, 4, 5, 1, 2],
  },
  {
    data: [
      [
        41,
        73,
        89,
        7,
        10,
        1,
        59,
        58,
        84,
        77,
        77,
        97,
        58,
        1,
        86,
        58,
        26,
        10,
        86,
        51,
      ],
      10,
    ],
    expected: [
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
    ],
  },
]

const testCases = fixtures.map(fixture => [
  ...fixture.data,
  fixture.expected,
]) as [number[], number, number[]][]

describe(fn.name, () => {
  test.each(testCases)('%#: (%p, %d) => %p', (arr, d, expected) => {
    expect(fn(arr, d)).toEqual(expected)
  })
})
