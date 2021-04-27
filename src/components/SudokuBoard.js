import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

export default function SudokuBoard ({ type, board, updateBoard }) {
  const [selectedCell, setSelectedCell] = useState('')

  return (
    <div className='board'>
      {board.map((row) => {
        const { cols, index } = row
        const isTheThirdRow = (row.index + 1) % 3 === 0
        return (
          <div className='row' key={`row-${index}`} style={{ marginBottom: isTheThirdRow ? 2 : 1 }}>
            {cols.map((cell) => {
              const key = `cell-${row.index}-${cell.index}`
              const isSelected = key === selectedCell

              return (
                <Cell
                  key={key}
                  index={key}
                  type={type}
                  isSelected={isSelected}
                  setSelectedCell={setSelectedCell}
                  updateValue={(updatedRows) => updateBoard([...updatedRows])}
                  rows={board}
                  cell={cell}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

SudokuBoard.propTypes = {
  type: PropTypes.oneOf(['create', 'solution', 'play']),
  board: PropTypes.object,
  updateBoard: PropTypes.func
}
