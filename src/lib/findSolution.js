import _ from 'lodash'
import validateBoard from './validateBoard'
import isBoardComplete from './isBoardComplete'

// Algorithm
// 1- find empty cell
// 2- fill in with possibilities
// 3- Validate each possibility
// 4- pick a valid board
// 5- repeat
// 6- backtrack if we reach a dead end

// Test examples:
// 1................................................................................
// 4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4...... NOT WORKING!
// 4.......5.3..........7......2.....6.......4......1.........3.7.5..2.....1.4......
// ..3.2.6..9..3.5..1..18.64....81.29..7.......8..67.82....26.95..8..2.3..9..5.1.3..

export default function findSolution (board) {
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

		for (let i=0; i<9; i++) {
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
	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (!board[i].cols[j].value) {
				return { rowIndex: i, columnIndex: j}
			}
		}
	}
}
