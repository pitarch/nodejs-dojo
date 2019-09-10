const assert = require('assert');
const expect = require('chai').expect;

const fixtures = [
  {
    hike: 'DDUUUUDD',
    expected: 2,
  },
  {
    hike: 'DDU',
    expected: 1,
  },
  {
    hike: 'UDD',
    expected: 1,
  },
  {
    hike: 'UDU',
    expected: 1,
  },
  {
    hike: 'UUU',
    expected: 0,
  },
  {
    hike: '',
    expected: 0,
  },
];

describe('kata', () => {
  fixtures.forEach(fixture => {
    const { hike, expected } = fixture;
    const input = hike.split('');
    it(`should there ${expected} valleys in "${hike}"`, () => {
      expect(reduceValleyCounter(input)).to.equal(expected);
    });
  });
});

/**
 *
 * @param {Array<String>} hike array of elevation changes
 */
function countValleys(hike) {
  var count = 0;
  var descending = false;
  for (x of hike) {
    if (x === 'D' && !descending) {
      descending = true;
      count++;
    } else if (x === 'U' && descending) {
      descending = false;
    }
  }
  return count;
}

/**
 * Count how many times does the hiker stay in the valley
 * @param {Array<String>} hike array of elevation changes
 */
function reduceValleyCounter(hike) {
  return hike.reduce(
    (state, step) => {
      if (step === 'D' && !state.descending) {
        state.descending = true;
        state.total++;
      } else if (step === 'U' && state.descending) {
        state.descending = false;
      }
      return state;
    },
    { total: 0, descending: false },
  ).total;
}
