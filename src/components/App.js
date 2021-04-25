import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import { SudokuBoardContext } from '../context/SudokuBoardContext'

function App () {
  const { board, setBoard, solutionBoard, initialBoard, verifySolution, clearMessage, boardVerification } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)

  const { success, message } = boardVerification

  return (
    <div className='app'>
      <div className='actions'>
        <button
          onClick={() => setCreateMode(!createMode)}
          style={{
            backgroundColor: createMode ? '#990000' : ''
          }}
        >
          {createMode ? 'Done' : 'Make your own puzzle'}
        </button>
        <button>Generate new puzzle</button>
      </div>
      <div className='boards'>
        <SudokuBoard
          type={createMode ? 'create' : 'play'}
          board={board}
          updateBoard={setBoard}
        />
        <button onClick={() => setDisplaySolution(!displaySolution)}>{displaySolution ? 'Clear' : 'Solve'}</button>
        <SudokuBoard
          type='solution'
          board={displaySolution ? solutionBoard : initialBoard}
        />
      </div>
      <button onClick={() => verifySolution()}>Verify</button>
      {
        message ||
        (success && displaySolution && 'You did it! Congratulations! Now... Try without cheating ;)') ||
        (success && 'You did it! Congratulations!')
      }
    </div>
  )
}

export default App
