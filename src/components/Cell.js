import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Cell ({ index, isSelected, setSelectedCell, type, cell, board, updateValue }) {
  const [cellValue, setCellValue] = useState(null)
  const isTheThirdCol = (cell.index + 1) % 3 === 0

  return (
    <div
      className='cell'
      style={{ marginRight: isTheThirdCol ? 2 : 0.5 }}
      onClick={() => {
        if (type === 'create' || (type === 'play' && cell.editable)) {
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
            onChange={({ target: { value } }) => setCellValue(value)}
            onBlur={() => {
              board[cell.row].cols[cell.index].value = cellValue
              // When in creation mode, cells with a value will become not editable, but a value, they become editable
              if (type === 'create') {
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
  index: PropTypes.string,
  isSelected: PropTypes.bool,
  setSelectedCell: PropTypes.func,
  type: PropTypes.oneOf(['create', 'play', 'solution']),
  cell: PropTypes.object,
  board: PropTypes.array,
  updateValue: PropTypes.func
}
