import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import EnterStringModal from './EnterStringModal'
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
    boardVerification
  } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  const [enterStringModalOpened, setEnterStringModalOpened] = useState(false)
  const [totalSolutionTime, setTotalSolutionTime] = useState(null)

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
              finishCreatingBoard(board)
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
          mode={createMode ? 'create' : 'play'}
          board={board}
          updateBoard={setBoard}
        />
        <button
          disabled={createMode}
          onClick={() => {
            if (!displaySolution) {
              const time = solveBoard()
              setTotalSolutionTime(time)
            } else {
              setTotalSolutionTime(null)
            }
            setDisplaySolution(!displaySolution)
          }}
          >
            {displaySolution ? 'Clear' : 'Solve'}
          </button>

        <SudokuBoard
          mode='solution'
          board={displaySolution ? solutionBoard : initialBoard}
        />
      </div>
      <div className='actions'>
        <button disabled={createMode} onClick={() => verifySolution()}>Verify</button>
        <button className='reset' disabled={createMode} onClick={() => restartGame()}>Reset</button>
      </div>
      {totalSolutionTime && (
        <div style={{ textAlign: 'center' }}>
          <h3>Solution time: {(totalSolutionTime / 1000).toFixed(3)}s</h3>
        </div>
      )}
      {
        message ||
        (success && displaySolution && 'You did it! Congratulations! Now... Try without cheating ;)') ||
        (success && 'You did it! Congratulations!')
      }
    </div>
  )
}

export default App
