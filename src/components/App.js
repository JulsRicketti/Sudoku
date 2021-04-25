import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import { SudokuBoardContext } from '../context/SudokuBoardContext'

function App () {
  const { board, setBoard, solutionBoard, initialBoard } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)

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

    </div>
  )
}

export default App
