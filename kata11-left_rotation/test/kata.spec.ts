import { fn } from '../src/kata'

const fixtures = [
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
    data: [[1, 2, 3, 4, 5], 2],
    expected: [3, 4, 5, 1, 2],
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
