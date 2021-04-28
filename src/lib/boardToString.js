// Using CommonJS because this script is used in the findSolutionCli script
module.exports = function boardToString (board) {
  let str = ''
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i].cols[j].value || '.'
      str = `${str}${value}`
    }
  }
  return str
}
