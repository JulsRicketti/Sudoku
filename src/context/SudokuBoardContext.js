
import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { generate, findSolution } from '../lib'

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

	console.warn('board', board)

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
		}
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
