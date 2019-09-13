import fn from '../src/kata'

const fixtures = [
  {
    data: ['a', 1],
    expected: 1,
  },
  {
    data: ['aa', 1],
    expected: 1,
  },
  {
    data: ['a', 10],
    expected: 10,
  },
  {
    data: ['abcac', 10],
    expected: 4,
  },
  {
    data: ['aba', 10],
    expected: 7,
  },
  {
    data: ['aba', 5],
    expected: 3,
  },
  {
    data: ['a', 1000000000000],
    expected: 1000000000000,
  },
]

const testCases = fixtures.map(fixture => [
  ...fixture.data,
  fixture.expected,
]) as [string, number, number][]

describe(fn.name, () => {
  test.each(testCases)('%#: (%p, %i) => %i', (s, n, expected) => {
    expect(fn(s, n)).toEqual(expected)
  })
})
