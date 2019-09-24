// https://www.hackerrank.com/challenges/new-year-chaos

/**
 * find the index of unsorted person with the highest position
 *
 * @param q array of person positions
 * @param upToPerson
 * @returns index in the queue of the person. -1 if the queue is sorted
 */
function findGreatestUnsortedPerson(q: number[], upToPerson: number): number {
  let result = -1
  let person = upToPerson
  while (person > 0 && result < 0) {
    const index = q.findIndex(p => p == person)
    if (person != index + 1) result = index
    person--
  }
  return result
}

function minimumBribes(q: number[]): number | string {
  const bribers = {} as { [key: string]: number }
  let bribes: number | string = 0
  let person = q.length
  let index

  do {
    index = findGreatestUnsortedPerson(q, person)
    if (index < 0) break

    person = q[index]
    const sindex = person.toString()
    if (!bribers[sindex]) bribers[sindex] = 0
    bribers[sindex]++
    bribes++
    if (bribers[sindex] > 2) {
      bribes = 'Too chaotic'
      break
    }
    // swap persons
    const tmp = q[index + 1]
    q[index + 1] = q[index]
    q[index] = tmp
  } while (true)

  console.log(bribes)
  return bribes
}

export const fn = minimumBribes
