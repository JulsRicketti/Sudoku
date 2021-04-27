import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import EnterStringModal from './EnterStringModal'
import Chronometer from './Chronometer'
import { SudokuBoardContext } from '../context/SudokuBoardContext'

function App () {
  const {
    board,
    setBoard,
    solutionBoard,
    solveBoard,
    initialBoard,
    finishCreatingBoard,
    verifySolution,
    restartGame,
    boardVerification,
    solving
  } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  const [enterStringModalOpened, setEnterStringModalOpened] = useState(false)

  const { success, message } = boardVerification

  return (
    <div className='app'>
      <EnterStringModal
        opened={enterStringModalOpened}
        onClose={() => setEnterStringModalOpened(false)}
        setBoard={(_board) => {
          setBoard(_board)
          console.warn('BOARD', _board)
          finishCreatingBoard(_board)
        }}
      />
      <div className='puzzle-creation'>
        <button
          onClick={() => {
            if (createMode) {
              setCreateMode(false)
            } else {
              setCreateMode(true)
            }
          }}
          style={{
            backgroundColor: createMode ? '#990000' : ''
          }}
        >
          {createMode ? 'Done' : 'Make your own puzzle'}
        </button>
        <button onClick={() => setEnterStringModalOpened(true)}>Generate puzzle from string</button>
      </div>
      <div className='boards'>
        <SudokuBoard
          type={createMode ? 'create' : 'play'}
          board={board}
          updateBoard={setBoard}
        />
        <button
          disabled={createMode}
          onClick={() => {
            if (!displaySolution) {
              solveBoard()
            }
            setDisplaySolution(!displaySolution)
          }}
          >
            {displaySolution ? 'Clear' : 'Solve'}
          </button>
        <SudokuBoard
          type='solution'
          board={displaySolution ? solutionBoard : initialBoard}
        />
      </div>
      <div className='actions'>
        <button disabled={createMode} onClick={() => verifySolution()}>Verify</button>
        <button className='reset' disabled={createMode} onClick={() => restartGame()}>Reset</button>
      </div>
      <div className='chronometer'>
        <Chronometer isRunning={solving}/>
      </div>
      {
        message ||
        (success && displaySolution && 'You did it! Congratulations! Now... Try without cheating ;)') ||
        (success && 'You did it! Congratulations!')
      }
    </div>
  )
}

export default App
