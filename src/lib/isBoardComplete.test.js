import createEmptyBoard from './createEmptyBoard'
import isBoardComplete from './isBoardComplete'

test('should return false if board is not completely filled in', () => {
  const board = createEmptyBoard()
  expect(isBoardComplete(board)).toBeFalsy()
})

test('should return true if board is completely filled in', () => {
  const board = createEmptyBoard()

  const filledBoard = board.map((row) => {
    let { cols } = row
    cols = cols.map((cell) => {
      cell.value = '1'
      return cell
    })
    return { ...row, cols }
  })

  expect(isBoardComplete(filledBoard)).toBeTruthy()
})
