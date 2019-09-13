import fn from '../src/kata'

const fixtures = [
  {
    data: [0, 0],
    expected: 1,
  },
  {
    data: [0, 1, 0],
    expected: 1,
  },
  {
    data: [0, 0, 0, 0, 1, 0],
    expected: 3,
  },
  {
    data: [0, 1, 0, 0, 0, 1, 0],
    expected: 3,
  },

  {
    data: [0, 0, 1, 0, 0, 1, 0],
    expected: 4,
  },
]

const testCases = fixtures.map(fixture => [fixture.data, fixture.expected]) as [
  number[],
  number,
][]

// test(fn.name, () => {
//   expect(fn([0, 0, 1, 0, 0, 1, 0])).toEqual(4)
// })

describe(fn.name, () => {
  test.each(testCases)('%#: %p => %i', (clouds, expected) => {
    expect(fn(clouds)).toEqual(expected)
  })
})
