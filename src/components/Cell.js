import React, { useState } from 'react'

export default function Cell ({ index, isSelected, setSelectedCell, type, cell, rows, updateValue }) {
	const [cellValue, setCellValue] = useState(null)
	const isTheThirdCol = (cell.index + 1) % 3 === 0

	return (
		<div
			className='cell'
			style={{ marginRight: isTheThirdCol ? 2 : 0.5}}
			onClick={() => {
				if (type !== 'solution' && cell.editable) {
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
						onChange={({ target: { value } })=> setCellValue(value)}
						onBlur={() => {
							rows[cell.row].cols[cell.index].value = cellValue
							if (type === 'create') {
								rows[cell.row].cols[cell.index].editable = false
							}
							updateValue(rows)
							setSelectedCell('')
						}}
					/>
				)
				: (
					<span style={{ fontWeight: cell.editable ? '' : 'bold', color: cell.editable ? '' : 'teal'}}>
						{rows[cell.row]?.cols[cell.index]?.value}
					</span>
					)
				}
		</div>
	)
}