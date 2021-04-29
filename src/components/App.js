import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import EnterStringModal from './EnterStringModal'
import Toast from './Toast'
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
    clearMessage
  } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  const [enterStringModalOpened, setEnterStringModalOpened] = useState(false)
  const [totalSolutionTime, setTotalSolutionTime] = useState(null)

  const { success, message } = boardVerification

  const successMessage = success
    ? displaySolution ? 'You did it! Congratulations! Now... Try without cheating ;)' : 'You did it! Congratulations!'
    : ''
  return (
    <div className='app'>
      <Toast type={success ? 'success' : 'error'} message={message || successMessage} display={!!(message || successMessage)} hideToast={() => clearMessage()}/>
      <EnterStringModal
        opened={enterStringModalOpened}
        onClose={() => setEnterStringModalOpened(false)}
        setBoard={(_board) => {
          setBoard(_board)
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
              // Remove any values put in before entering creation mode
              setBoard(initialBoard)
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
          board={displaySolution && solutionBoard ? solutionBoard : initialBoard}
        />
      </div>
      <div className='actions'>
        <button disabled={createMode} onClick={() => verifySolution()}>Verify</button>
        <button className='reset' disabled={createMode} onClick={() => restartGame()}>Reset</button>
      </div>
      {solutionBoard && totalSolutionTime && (
        <div style={{ textAlign: 'center' }}>
          <h3>Solution time: {(totalSolutionTime / 1000).toFixed(3)}s</h3>
        </div>
      )}
    </div>
  )
}

export default App
