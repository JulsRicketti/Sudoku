import React, { useState } from 'react'
import Cell from './Cell'

export default function SudokuBoard ({ type }) {
	const DIMENSION = 9
	const ROWS = []

	for (let i=0; i<DIMENSION; i++) {
		const cols = []
		for (let j=0; j<DIMENSION; j++) {
			cols.push({ index: j, row: i, value: null })
		}
		ROWS.push({
			index: i,
			cols
		})
	}

	const [selectedCell, setSelectedCell] = useState('')
	const [rows, setRows] = useState(ROWS)
	console.warn('ROWS', ROWS)

	return (
		<div className='board'>
			{ROWS.map((row) => {
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
									updateValue={(updatedRows) => setRows({...updatedRows})}
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