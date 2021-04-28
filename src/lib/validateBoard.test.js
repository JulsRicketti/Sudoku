import { validateBoard, boxesValid, columnsValid, rowsValid } from './validateBoard'
import findSolution from './findSolution'
import stringToBoard from './stringToBoard'

const INVALID_BOARD_STRING = '999999999999999999999999999999999999999999999999999999999999999999999999999999999'
const VALID_BOARD_STRING = '..3.2.6..9..3.5..1..18.64....81.29..7.......8..67.82....26.95..8..2.3..9..5.1.3..'

test('[validateBoard] should return false if board is invalid', () => {
  const invalidBoard = stringToBoard(INVALID_BOARD_STRING)

  expect(validateBoard(invalidBoard)).toBeFalsy()
})

test('[validateBoard] should verify if a filled board is valid', () => {
  const solution = findSolution(stringToBoard(VALID_BOARD_STRING))

  expect(validateBoard(solution)).toBeTruthy()
})

const INVALID_ROWS_STRING = '111111111222222222333333333444444444555555555666666666777777777888888888999999999'
const VALID_ROWS_STRING = '123456789123456789123456789123456789123456789123456789123456789123456789123456789'

test('[rowsValid] should return false if any rows are invalid', () => {
  const invalidRows = stringToBoard(INVALID_ROWS_STRING)

  expect(rowsValid(invalidRows)).toBeFalsy()
})

test('[rowsValid] should return true is all rows are valid', () => {
  const validRows = stringToBoard(VALID_ROWS_STRING)

  expect(rowsValid(validRows)).toBeTruthy()
})

const VALID_COLUMNS_STRING = '111111111222222222333333333444444444555555555666666666777777777888888888999999999'
const INVALID_COLUMNS_STRING = '123456789123456789123456789123456789123456789123456789123456789123456789123456789'

test('[columnsValid] should return false if any rows are invalid', () => {
  const invalidColumns = stringToBoard(INVALID_COLUMNS_STRING)

  expect(columnsValid(invalidColumns)).toBeFalsy()
})

test('[columnsValid] should return true is all rows are valid', () => {
  const validColumns = stringToBoard(VALID_COLUMNS_STRING)

  expect(columnsValid(validColumns)).toBeTruthy()
})

const VALID_BOXES_STRING = '123123123456456456789789789123123123456456456789789789123123123456456456789789789'
const INVALID_BOXES_STRING = '123456789123456789123456789123456789123456789123456789123456789123456789123456789'

test('[boxesValid] should return false if any rows are invalid', () => {
  const invalidBoxes = stringToBoard(INVALID_BOXES_STRING)

  expect(boxesValid(invalidBoxes)).toBeFalsy()
})

test('[boxesValid] should return true is all rows are valid', () => {
  const validBoxes = stringToBoard(VALID_BOXES_STRING)

  expect(boxesValid(validBoxes)).toBeTruthy()
})
