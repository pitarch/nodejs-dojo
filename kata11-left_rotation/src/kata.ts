// https://www.hackerrank.com/challenges/ctci-array-left-rotation
function rotLeft(a: number[], d: number): number[] {
  let i = 0
  let value = a[0]
  do {
    const nextI = (i + a.length - d) % a.length
    const backup = a[nextI]
    a[nextI] = value
    i = nextI
    value = backup
  } while (i != 0)
  return a
}

export const fn = rotLeft
