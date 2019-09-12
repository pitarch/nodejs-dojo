function catAndMouse(x: number, y: number, z: number): string {
  const catA = Math.abs(x - z)
  const catB = Math.abs(y - z)
  return catA === catB ? 'Mouse C' : catA > catB ? 'Cat A' : 'Cat B'
}
export default catAndMouse
