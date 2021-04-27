import validateBoard, { validBoard, validColumn, validRow } from './validateBoard'
import findSolution from './findSolution'
import stringToBoard from './stringToBoard'

const INVALID_BOARD_STRING = '999999999999999999999999999999999999999999999999999999999999999999999999999999999'
const VALID_BOARD_STRING = '..3.2.6..9..3.5..1..18.64....81.29..7.......8..67.82....26.95..8..2.3..9..5.1.3..'

test('should return false if board is invalid', () => {
  const invalidBoard = stringToBoard(INVALID_BOARD_STRING)

  expect(validateBoard(invalidBoard)).toBeFalsy()
})

test('should verify if a filled board is valid', () => {
  const solution = findSolution(stringToBoard(VALID_BOARD_STRING))

  expect(validateBoard(solution)).toBeTruthy()
})
