import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { stringToBoard } from '../lib'

export default function EnterStringModal ({ opened, onClose, setBoard }) {
  const [stringValue, setStringValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const _onClose = () => {
    setStringValue('')
    setErrorMessage('')
    onClose()
  }

  const generateBoard = () => {
    try {
      const board = stringToBoard(stringValue)
      setBoard(board)
      _onClose()
    } catch (err) {
      setErrorMessage(err.toString())
    }
  }

  return opened
    ? (
    <div className='modal'>
      <div>
        <h3>Enter a string using the pattern from <a href='http://norvig.com/sudoku.html' target='_blank' rel='noopener noreferrer'>Norvig.com</a></h3>
        <small>{errorMessage}</small>
        <input
          value={stringValue}
          onChange={({ target }) => setStringValue(target.value)}
        />
      </div>
      <div>
        <button disabled={!stringValue} onClick={generateBoard}>Generate</button>
        <button onClick={_onClose}>Close</button>
      </div>
    </div>
      )
    : null
}

EnterStringModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired
}
