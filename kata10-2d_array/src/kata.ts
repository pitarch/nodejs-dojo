function hourglass(arr: number[][], di: number, dj: number): number {
  return (
    arr[di][dj] +
    arr[di][dj + 1] +
    arr[di][dj + 2] +
    arr[di + 1][dj + 1] +
    arr[di + 2][dj] +
    arr[di + 2][dj + 1] +
    arr[di + 2][dj + 2]
  )
}

// https://www.hackerrank.com/challenges/2d-array/problem
/**
 *
 * @param arr
 */
function hourglassSum(arr: number[][]): number {
  let greatest = undefined
  for (let di = 0; di + 2 <= arr.length - 1; di++) {
    for (let dj = 0; dj + 2 <= arr[0].length - 1; dj++) {
      const h = hourglass(arr, di, dj)
      if (greatest === undefined) greatest = h
      else if (h > greatest) greatest = h
    }
  }

  return greatest
}

export const fn = hourglassSum
