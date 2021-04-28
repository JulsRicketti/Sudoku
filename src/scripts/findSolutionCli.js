const { performance } = require('perf_hooks')
const findSolution = require('../lib/findSolution')
const stringToBoard = require('../lib/stringToBoard')
const boardToString = require('../lib/boardToString')

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
  console.log('Solution', solution)
  console.log('Solution String:', boardToString(solution))
  console.log(`Execution time: ${(executionTime / 1000).toFixed(3)}s`)
}

findSolutionCli()

module.exports = findSolutionCli
