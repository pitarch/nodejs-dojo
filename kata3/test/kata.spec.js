// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const fixtures = [
  {
    data: [3, 4, 21, 36, 10, 28, 35, 5, 24, 42],
    expected: [4, 0],
  },
  {
    data: [10, 5, 20, 20, 4, 5, 2, 25, 1],
    expected: [2, 4],
  },
];

const testCases = fixtures.map(fixture => [fixture.data, fixture.expected]);

test.each(testCases)('breakingRecords(%o) => %o', (scores, expected) => {
  expect(breakingRecords(scores)).toEqual(expected);
});

// Complete the breakingRecords function below.
/**
 *
 * @param {Array.<Number>} scores
 */
function breakingRecords(scores) {
  if (scores.length == 0) return [0, 0];

  const highest = scores.reduce(
    (state, currScore) => {
      if (currScore > state.score)
        state = { times: state.times + 1, score: currScore };
      return state;
    },
    { times: 0, score: scores[0] },
  );

  const lowest = scores.reduce(
    (state, currScore) => {
      if (currScore < state.score)
        state = { times: state.times + 1, score: currScore };
      return state;
    },
    { times: 0, score: scores[0] },
  );

  const result = [highest.times, lowest.times];
  return result;
}
