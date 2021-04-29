import { findSolution, getNextBoards, findFirstEmptyCellIndex } from './findSolution'
import stringToBoard from './stringToBoard'
import boardToString from './boardToString'
import { validateBoard } from './validateBoard'

const BOARD_1 = '........5.3..........7......2.....6.......4......1.........3.7.5..2.....1.4......'
const BOARD_2 = '482.....5.3..........7......2.....6.......4......1.........3.7.5..2.....1.4......'
const BOARD_WITH_CONTRADICTIONS = '12345678913123456789.7......2.....6.......4......1.........3.7.5..2.....1.4......'

test('[findFirstEmptyCellIndex] should find the first empty cell of the board', () => {
  const board1 = stringToBoard(BOARD_1)
  const firstEmptyCell1 = findFirstEmptyCellIndex(board1)
  expect(firstEmptyCell1).toStrictEqual({ rowIndex: 0, columnIndex: 0 })

  const board2 = stringToBoard(BOARD_2)
  const firstEmptyCell2 = findFirstEmptyCellIndex(board2)
  expect(firstEmptyCell2).toStrictEqual({ rowIndex: 0, columnIndex: 3 })

  const board3 = stringToBoard(BOARD_WITH_CONTRADICTIONS)
  const firstEmptyCell3 = findFirstEmptyCellIndex(board3)
  expect(firstEmptyCell3).toStrictEqual({ rowIndex: 2, columnIndex: 2 })
})

const possibleValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
test('[getNextBoards] should return all possible board variations for filling out the board’s first empty cell', () => {
  const board1 = stringToBoard(BOARD_1)
  const { rowIndex, columnIndex } = findFirstEmptyCellIndex(board1)
  const possibilities = getNextBoards(board1)

  expect(possibilities).toHaveLength(9) // Should be 9 boards (one for each possibility)
  // On the first index, should only include the possible values (1-9)
  const firstEmptyRowPossibleValuesValid = possibilities.every((possibility) => possibleValues.includes(possibility[rowIndex].cols[columnIndex].value))
  expect(firstEmptyRowPossibleValuesValid).toBeTruthy()
  // Each valid value must appear at least once
  const possibleValuesObject = possibleValues.reduce((obj, value) => ({ ...obj, [value]: false }), {})
  possibilities.forEach((possibility) => {
    const { value } = possibility[rowIndex].cols[columnIndex]
    possibleValuesObject[value] = true
  })

  const hasAllPossibleValues = possibleValues.every((possibleValue) => possibleValuesObject[possibleValue])
  expect(hasAllPossibleValues).toBeTruthy()
})

test('[findSolution] should return false to a board with contradictions', () => {
  const boardWithContradictions = stringToBoard(BOARD_WITH_CONTRADICTIONS)
  expect(findSolution(boardWithContradictions)).toBeFalsy()
})

test('[findSolution] should find a valid solution to a board without contradictions', () => {
  const board1 = stringToBoard(BOARD_1)
  const solution = findSolution(board1)

  // board should be valid
  expect(validateBoard(solution)).toBeTruthy()

  const solutionString = boardToString(solution)
  // Should have no more "."
  expect(solutionString.includes('.')).toBeFalsy()
  // Should only include 1-9 values
  const solutionArray = solutionString.split('')
  expect(solutionArray.every((value) => possibleValues.includes(value))).toBeTruthy()
})
