export default function createEmptyBoard () {
  const DIMENSION = 9
  const board = []

  for (let i = 0; i < DIMENSION; i++) {
    const cols = []
    for (let j = 0; j < DIMENSION; j++) {
      cols.push({ index: j, row: i, value: null, editable: true })
    }
    board.push({
      index: i,
      cols
    })
  }

  return board
}
