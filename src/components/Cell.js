import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Cell ({ index, isSelected, setSelectedCell, mode, cell, board, updateValue }) {
  const [cellValue, setCellValue] = useState(null)
  const isTheThirdCol = (cell.index + 1) % 3 === 0
  const validEntries = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <div
      className='cell'
      style={{ marginRight: isTheThirdCol ? 2 : 0.5 }}
      onClick={() => {
        if (mode === 'create' || (mode === 'play' && cell.editable)) {
          if (isSelected) {
            setSelectedCell('')
          } else {
            setSelectedCell(index)
          }
        }
      }}
    >
      {isSelected
        ? (
          <input
            type='number'
            autoFocus
            min={1}
            max={9}
            value={cellValue || ''}
            onChange={({ target: { value } }) => validEntries.includes(value) && value.length < 2 && setCellValue(value)}
            onBlur={() => {
              board[cell.row].cols[cell.index].value = cellValue
              // When in creation mode, cells with a value will become not editable, but a value, they become editable
              if (mode === 'create') {
                board[cell.row].cols[cell.index].editable = !cellValue
              }
              updateValue(board)
              setSelectedCell('')
            }}
          />
          )
        : (
          <span style={{ fontWeight: cell.editable ? '' : 'bold', color: cell.editable ? '' : 'teal' }}>
            {board[cell.row]?.cols[cell.index]?.value}
          </span>
          )
        }
    </div>
  )
}

Cell.propTypes = {
  index: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSelectedCell: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['create', 'play', 'solution']).isRequired,
  cell: PropTypes.object.isRequired,
  board: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired
}
