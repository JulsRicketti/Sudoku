const { performance } = require('perf_hooks')
const findSolution = require('../lib/findSolution')
const stringToBoard = require('../lib/stringToBoard')
const boardToString = require('../lib/boardToString')

// Test examples:
// 1................................................................................
// 4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4...... NOT WORKING!
// 4.......5.3..........7......2.....6.......4......1.........3.7.5..2.....1.4......
// ..3.2.6..9..3.5..1..18.64....81.29..7.......8..67.82....26.95..8..2.3..9..5.1.3..
function findSolutionCli () {
  const stringBoard = process.argv[2]

  if (!stringBoard) {
    throw new Error('Missing board argument. Please provide it using the norvig.com notation.')
  }

  const board = stringToBoard(stringBoard)
  const start = performance.now()
  const solution = findSolution(board)
  const end = performance.now()
  const executionTime = end - start
  console.log('Solution String:', boardToString(solution))
  console.log(`Execution time: ${(executionTime / 1000).toFixed(3)}s`)
}

findSolutionCli()

module.exports = findSolutionCli
