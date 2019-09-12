import fn from '../src/kata'

const fixtures = [
  {
    data: [1, 2, 4],
    expected: 'Cat A',
  },

  {
    data: [1, 3, 2],
    expected: 'Mouse C',
  },
]

const testCases = fixtures.map(
  fixture =>
    [fixture.data[0], fixture.data[1], fixture.data[2], fixture.expected] as [
      number,
      number,
      number,
      string,
    ],
)

describe('catAndMouse', () => {
  test.each(testCases)('[%i, %i, %i] => %s', (x, y, z, expected) => {
    expect(fn(x, y, z)).toEqual(expected)
  })
})
