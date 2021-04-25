
import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { generate, findSolution, isBoardComplete, validateBoard } from '../lib'

export const SudokuBoardContext = createContext({
	board: {},
	setBoard: ()=>null,
	solutionBoard: {},
	solveBoard: ()=>null,
	clearSolvedBoard: ()=>null
})

export const SudokuBoardProvider = ({ children }) => {
	const [initialBoard, setInitialBoard] = useState(generate())

	const [board, setBoard] = useState(_.cloneDeep(initialBoard))
	const [solutionBoard, setSolutionBoard] = useState(findSolution(_.cloneDeep(initialBoard)))

	const [boardVerification, setBoardVerification] = useState({
		success: false,
		message: ''
	})

	const finishCreatingBoard = () => {
		const solution = findSolution(board)

		if (!solution) {
			return { success: false }
		} else {
			setInitialBoard(board)
			setSolutionBoard(solution)
		}
		return { success: true }
	}

	const restartGame = (withNewBoard = false) => {
		if (withNewBoard) {
			const newBoard = generate()
			setBoard(newBoard)
			setSolutionBoard(findSolution(newBoard))
		} else {
			setBoard(initialBoard)
		}
		setBoardVerification({
			success: false,
			message: ''
		})
	}

	const verifySolution = () => {
		if (!isBoardComplete(board)) {
			setBoardVerification({ success: false, message: 'The board is not yet complete'})
		} else if (!validateBoard(board)) {
			setBoardVerification({ success: false, message: 'Errors have been found on the board'})
		} else {
			setBoardVerification({ success: true, message: '' })
		}
	}

  const valueObj = {
    initialBoard,
    board,
    setBoard,
    solutionBoard,
    solveBoard: () => {
      setSolutionBoard(findSolution(solutionBoard))
    },
    clearSolvedBoard: () => {
      setSolutionBoard(initialBoard)
    },
    finishCreatingBoard,
    restartGame,
    boardVerification,
    verifySolution,
    clearMessage: () => setBoardVerification({ ...boardVerification, message: '' })
  }

  return (
    <SudokuBoardContext.Provider value={valueObj}>
      {children}
    </SudokuBoardContext.Provider>
  )
}

SudokuBoardProvider.propTypes = {
  children: PropTypes.any.isRequired
}
