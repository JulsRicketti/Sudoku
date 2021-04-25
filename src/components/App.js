import React, { useState, useContext } from 'react'
import SudokuBoard from './SudokuBoard'
import EnterStringModal from './EnterStringModal'
import { SudokuBoardContext } from '../context/SudokuBoardContext'

function App () {
  const { board, setBoard, solutionBoard, initialBoard, finishCreatingBoard, verifySolution, restartGame, clearMessage, boardVerification, generateNewBoard } = useContext(SudokuBoardContext)
  const [createMode, setCreateMode] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  const [enterStringModalOpened, setEnterStringModalOpened] = useState(false)

  const [creationFailedMessage, setCreationFailedMessage] = useState('')

  const { success, message } = boardVerification

  return (
    <div className='app'>
      {creationFailedMessage}
      <EnterStringModal
        opened={enterStringModalOpened}
        onClose={() => setEnterStringModalOpened(false)}
        setBoard={(_board) => {
          setBoard(_board)
          console.warn('BOARD', _board)
          finishCreatingBoard(_board)
        }}
      />
      <div className='actions'>
        <button
          onClick={() => {
            if (createMode) {
              const { success } = finishCreatingBoard()
              if (success) {
                setCreateMode(false)
                setCreationFailedMessage('')
              } else {
                setCreationFailedMessage('Board creation failed. This probably happened due to it being an invalid entry with no possible solution. Please review your entries.')
              }
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
        {/* <button onClick={() => restartGame(true)}>Generate new puzzle</button> */}
      </div>
      <div className='boards'>
        <SudokuBoard
          type={createMode ? 'create' : 'play'}
          board={board}
          updateBoard={setBoard}
        />
        <button disabled={createMode} onClick={() => setDisplaySolution(!displaySolution)}>{displaySolution ? 'Clear' : 'Solve'}</button>
        <SudokuBoard
          type='solution'
          board={displaySolution ? solutionBoard : initialBoard}
        />
      </div>
      <button disabled={createMode} onClick={() => verifySolution()}>Verify</button>
      <button disabled={createMode} onClick={() => restartGame()}>Reset</button>
      {
        message ||
        (success && displaySolution && 'You did it! Congratulations! Now... Try without cheating ;)') ||
        (success && 'You did it! Congratulations!')
      }
    </div>
  )
}

export default App
