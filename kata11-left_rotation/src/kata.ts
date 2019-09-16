// https://www.hackerrank.com/challenges/ctci-array-left-rotation
function rotLeft(a: number[], d: number): number[] {
  const aa = [...a]
  const tail = a.slice(-d)
  for (let i = 0, j = 0; i < a.length; i++) {
    if (i < a.length - d) {
      a[(i + a.length - d) % a.length] = a[i]
    } else {
      a[(i + a.length - d) % a.length] = tail[j++]
    }
  }
  console.log(`[${aa}]/${d} => [${a}]`)
  return a
}

function rotLeft2(a: number[], d: number): number[] {
  return [...a.slice(d), ...a.slice(0, d)]
}

export const fn = rotLeft
