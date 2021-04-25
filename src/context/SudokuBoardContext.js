
import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { generate, findSolution, isBoardComplete, validateBoard } from '../lib'

export const SudokuBoardContext = createContext({
	board: {},
	setBoard: ()=>null,
	solutionBoard: {},
	solveBoard: ()=>null,
	clearSolvedBoard: ()=>null
})

export const SudokuBoardProvider = ({ children }) => {
	const initialBoard = generate()

	const [board, setBoard] = useState(initialBoard)
	const [solutionBoard, setSolutionBoard] = useState(findSolution(initialBoard))

	const [boardVerification, setBoardVerification] = useState({
		success: false,
		message: ''
	})

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
