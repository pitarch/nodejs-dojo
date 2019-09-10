const fixtures = [
  {
    data: [0, 2, 5, 3],
    expected: 'NO',
  },
  {
    data: [0, 1, 0, 2],
    expected: 'NO',
  },
  {
    data: [0, 1, 1, 2],
    expected: 'NO',
  },
  {
    data: [0, 2, 1, 2],
    expected: 'NO',
  },
  {
    data: [0, 1, 0, 1],
    expected: 'YES',
  },
  {
    data: [0, 6, 6, 3],
    expected: 'YES',
  },
];

const testCases = fixtures.map(fixture => [...fixture.data, fixture.expected]);
console.log(testCases);

// https://www.hackerrank.com/challenges/kangaroo/problem

test.each(testCases)(
  'kangaroo(%d, %d, %d, %d) => %s',
  (x1, v1, x2, v2, expected) => {
    expect(kangaroo(x1, v1, x2, v2)).toBe(expected);
  },
);

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) {
    return v1 === v2 ? 'YES' : 'NO';
  }

  if (v1 === v2) return 'NO';

  const v = v1 - v2;
  const x = x2 - x1;

  const y2 = Math.floor(x / v);
  const y1 = Math.abs(x) % Math.abs(v);
  return y2 > 0 && y1 === 0 ? 'YES' : 'NO';
}
