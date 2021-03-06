// Using CommonJS because this script is used in the findSolutionCli script

function rowsValid (board) {
  for (let i = 0; i < 9; i++) {
    const values = []
    for (let j = 0; j < 9; j++) {
      const value = board[i].cols[j].value
      if (values.includes(value)) {
        return false
      } else if (value) {
        values.push(value)
      }
    }
  }
  return true
}

function columnsValid (board) {
  for (let i = 0; i < 9; i++) {
    const values = []
    for (let j = 0; j < 9; j++) {
      const value = board[j].cols[i].value
      if (values.includes(value)) {
        return false
      } else if (value) {
        values.push(value)
      }
    }
  }
  return true
}

function boxesValid (board) {
  const boxCoordinates = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ]

  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      const values = []

      for (let i = 0; i < 9; i++) {
        const coordinates = [...boxCoordinates[i]]
        coordinates[0] += y
        coordinates[1] += x
        const value = board[coordinates[0]].cols[coordinates[1]].value
        if (values.includes(value)) {
          return false
        } else if (value) {
          values.push(value)
        }
      }
    }
  }

  return true
}

function validateBoard (board) {
  return rowsValid(board) && columnsValid(board) && boxesValid(board)
}

module.exports = {
  validateBoard,
  rowsValid,
  columnsValid,
  boxesValid
}
