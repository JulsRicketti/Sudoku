import React, { useState } from 'react'
import SudokuBoard from './SudokuBoard'

function App() {
  const [createMode, setCreateMode] = useState(false)

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
        />
        <button>Solve</button>
        <SudokuBoard type='solution' />
      </div>
    </div>
  )
}

export default App
