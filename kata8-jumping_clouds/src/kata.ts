/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 * @param c array of either 0 and 1.
 */
function jumpingOnClouds(clouds: number[]): number {
  let index = 0
  const upperIndex = clouds.length - 1
  let counter = 0
  while (index < upperIndex) {
    const nextJump = index + 2
    if (clouds[nextJump] == 0) {
      index = nextJump
    } else {
      index = index + 1
    }
    counter++
  }
  return counter
}

export default jumpingOnClouds
