/**
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */
function repeatedString(s: string, n: number): number {
  const subCount = s
    .split('')
    .reduce((counter, c) => (c == 'a' ? counter + 1 : counter), 0)

  let result = Math.floor(n / s.length) * subCount

  n = n % s.length
  if (n > 0) {
    result += s
      .slice(0, n)
      .split('')
      .reduce((counter, c) => (c == 'a' ? counter + 1 : counter), 0)
  }

  return result
}

export default repeatedString
