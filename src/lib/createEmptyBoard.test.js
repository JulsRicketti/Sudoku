import createEmptyBoard from './createEmptyBoard'

test('should return empty board', () => {
  const emptyBoard = createEmptyBoard()
  const isEmpty = emptyBoard.every(({ cols }) => cols.every((cell) => !cell.value))
  expect(isEmpty).toBeTruthy()
})
