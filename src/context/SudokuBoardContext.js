
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { generate, findSolution, isBoardComplete, validateBoard } from '../lib'

export const SudokuBoardContext = createContext({
  initialBoard: {},
  setInitialBoard: () => null,
  board: {},
  setBoard: () => null,
  solutionBoard: {},
  solveBoard: () => null,
  clearSolvedBoard: () => null,
  finishCreatingBoard: () => null,
  restartGame: () => null,
  verifySolution: () => null
})

export const SudokuBoardProvider = ({ children }) => {
  const [initialBoard, setInitialBoard] = useState(generate())

  const [board, setBoard] = useState(_.cloneDeep(initialBoard))
  const [solutionBoard, setSolutionBoard] = useState(null)

  const [boardVerification, setBoardVerification] = useState({
    success: false,
    message: ''
  })

  const finishCreatingBoard = (_board) => {
    setInitialBoard(_.cloneDeep(_board || board))
    setBoard(_board || board)
  }

  const restartGame = () => {
    setBoard(_.cloneDeep(initialBoard))
    setBoardVerification({
      success: false,
      message: ''
    })
  }

  const verifySolution = () => {
    if (!isBoardComplete(board)) {
      setBoardVerification({ success: false, message: 'The board is not yet complete' })
    } else if (!validateBoard(board)) {
      setBoardVerification({ success: false, message: 'Errors have been found on the board' })
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
      const clonedInitialBoard = _.cloneDeep(initialBoard)
      const start = performance.now()
      const solution = findSolution(clonedInitialBoard)
      const end = performance.now()
      setSolutionBoard(solution)
      if (!solution) {
        setBoardVerification({
          success: false,
          message: 'Board could not be solved. This is most likely due to it having a contradction. Review its initial values.'
        })
      }
      const executionTime = end - start
      return executionTime
    },
    clearSolvedBoard: () => {
      setSolutionBoard(_.cloneDeep(initialBoard))
    },
    finishCreatingBoard,
    restartGame,
    boardVerification,
    verifySolution,
    clearMessage: () => setBoardVerification({ sucess: false, message: '' })
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
