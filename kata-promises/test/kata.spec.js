const fixtures = [
  {
    data: [[3, 1], [5, 2, 8], 10],
    expected: 9,
  },
];

const testCases = fixtures.map(fixture => [...fixture.data, fixture.expected]);

describe('async/await', () => {
  test('return 1', () => {
    f().then(result => expect(result).toBe(1));
  });
  test('resolve the non negatives', async () => {
    await expect(f2(3)).resolves.toEqual(true);
  });
  test('rejects when negative', async () => {
    await expect(f2(-1)).rejects.toEqual(false);
  });
});

async function f() {
  return 1;
}

function f2(value) {
  return new Promise((resolve, reject) => {
    value >= 0 ? resolve(true) : reject(false);
  });
}
