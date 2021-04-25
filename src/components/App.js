import React, { useState } from 'react'
import SudokuBoard from './SudokuBoard'
import { generate, findSolution, validateBoard, isBoardComplete } from '../lib'

function App() {
  const [createMode, setCreateMode] = useState(false)
  const [solved, setSolve] = useState(false)
  const initialRows = generate()

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
          initialRows={initialRows}
        />
        <button onClick={() => setSolve(!solved)}>{solved ? 'Clear' : 'Solve'}</button>
        <SudokuBoard
          type='solution'
          initialRows={solved ? findSolution(initialRows) : initialRows }
        />
      </div>
    </div>
  )
}

export default App
