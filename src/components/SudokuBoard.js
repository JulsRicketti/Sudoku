import React, { useState, useEffect } from 'react'
import Cell from './Cell'

export default function SudokuBoard ({ type, initialRows }) {
	const [selectedCell, setSelectedCell] = useState('')
	const [rows, setRows] = useState([])

	useEffect(() => {
		setRows(initialRows)
	}, [initialRows])

	return (
		<div className='board'>
			{rows.map((row) => {
				const { cols, index } = row
				const isTheThirdRow = (row.index + 1) % 3 === 0
				return (
					<div className='row' key={`row-${index}`} style={{ marginBottom: isTheThirdRow ? 2 : 1}}>
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
									updateValue={(updatedRows) => setRows([...updatedRows])}
									rows={rows}
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