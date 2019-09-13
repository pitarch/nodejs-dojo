import { fn } from '../src/kata'

const fixtures = [
  {
    data: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    expected: 0,
  },
  {
    data: [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ],
    expected: 19,
  },
]

const testCases = fixtures.map(fixture => [fixture.data, fixture.expected]) as [
  number[][],
  number,
][]

describe(fn.name, () => {
  test.each(testCases)('%#: (%o) => %i', (arr, expected) => {
    expect(fn(arr)).toEqual(expected)
  })
})
