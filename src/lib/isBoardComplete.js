export default function isBoardComplete (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!board[i].cols[j].value) {
        return false
      }
    }
  }
  return true
}
