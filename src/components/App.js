import React from 'react'
import SudokuBoard from './SudokuBoard'

function App() {
  return (
    <div className='app'>
      <SudokuBoard/>
      <button>Solve</button>
      <SudokuBoard/>
    </div>
  )
}

export default App
