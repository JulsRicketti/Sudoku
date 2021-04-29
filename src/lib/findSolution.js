// Using CommonJS because this script is used in the findSolutionCli script
const _ = require('lodash')
// const boardToString = require('./boardToString')
const { validateBoard } = require('./validateBoard')
const isBoardComplete = require('./isBoardComplete')

// Algorithm
// 1- find empty cell
// 2- fill in with possibilities
// 3- Validate each possibility
// 4- pick a valid board
// 5- repeat
// 6- backtrack if we reach a dead end

function findSolution (board) {
  if (isBoardComplete(board)) {
    return board
  } else {
    // (1 & 2) Finds first empty cell and creates the possibilities
    const possibilities = getNextBoards(board)
    // (3) Validates each possibility
    const validBoards = possibilities.filter((board) => validateBoard(board))

    // (4) Picks a valid board and moves on to to find the next board with the first cell filled in.
    // (5 & 6) Recursively repeats itself with the board with the
    const advanceOrBacktrack = (boards) => {
      if (!boards.length) {
        return false
      } else {
        const first = boards.shift()
        // console.log('Current board:', boardToString(first))
        const tryPath = findSolution(first)
        if (tryPath) {
          return tryPath
        } else {
          return advanceOrBacktrack(boards)
        }
      }
    }

    return advanceOrBacktrack(validBoards)
  }
}

function getNextBoards (board) {
  const nextBoards = []
  const firstEmptyCell = findFirstEmptyCellIndex(board)
  if (firstEmptyCell) {
    const { rowIndex, columnIndex } = firstEmptyCell

    for (let i = 0; i < 9; i++) {
      const newBoard = [...board]
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

module.exports = {
  findSolution,
  getNextBoards,
  findFirstEmptyCellIndex
}
