import boardToString from './boardToString'
import createEmptyBoard from './createEmptyBoard'

test('must return a string with 81 "." characters when creating an empty board', () => {
  const emptyBoard = createEmptyBoard()
  const stringBoard = boardToString(emptyBoard)
  expect(stringBoard).toHaveLength(81)
  expect(stringBoard.split('').every((c) => c === '.')).toBeTruthy()
})
