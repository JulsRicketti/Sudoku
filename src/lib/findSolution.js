// Using CommonJS because this script is used in the findSolutionCli script

const _ = require('lodash')
const stringToBoard = require('./stringToBoard')
const validateBoard = require('./validateBoard')
const isBoardComplete = require('./isBoardComplete')

// Algorithm
// 1- find empty cell
// 2- fill in with possibilities
// 3- Validate each possibility
// 4- pick a valid board
// 5- repeat
// 6- backtrack if we reach a dead end

module.exports = function findSolution (board) {
  if (isBoardComplete(board)) {
    return board
  } else {
    const possibilities = getNextBoards(board)
    const validBoards = possibilities.filter((board) => validateBoard(board))

    const backtrack = (boards) => {
      if (!boards.length) {
        return false
      } else {
        const first = boards.shift()
        const tryPath = findSolution(first)
        if (tryPath) {
          return tryPath
        } else {
          return backtrack(boards)
        }
      }
    }

    return backtrack(validBoards)
  }
}

function getNextBoards (board) {
  const nextBoards = []
  const firstEmptyCell = findFirstEmptyCellIndex(board)
  if (firstEmptyCell) {
    const { rowIndex, columnIndex } = firstEmptyCell
    // console.table({rowIndex, columnIndex})

    for (let i = 0; i < 9; i++) {
      const newBoard = _.cloneDeep(board)
      const row = _.cloneDeep(newBoard[rowIndex])
      row.cols[columnIndex].value = (i + 1).toString()
      newBoard[rowIndex] = row
      nextBoards.push(newBoard)
    }
  }
  return nextBoards
}

function findFirstEmptyCellIndex (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!board[i].cols[j].value) {
        return { rowIndex: i, columnIndex: j }
      }
    }
  }
}
