import React from 'react'

export default function SudokuBoard () {
	const DIMENSION = 9
	const rows = []

	for (let i=0; i<DIMENSION; i++) {
		const cols = []
		for (let j=0; j<DIMENSION; j++) {
			cols.push({ index: j })
		}
		rows.push({
			index: i,
			cols
		})
	}

	return (
		<div className='board'>
			{rows.map((row) => {
				const { cols, index } = row
				const isTheThirdRow = (row.index + 1) % 3 === 0
				return (
					<div className='row' key={index} style={{ marginBottom: isTheThirdRow ? 2 : 1}}>
						{cols.map((col) => {
							const isTheThirdCol = (col.index + 1) % 3 === 0
							return (
								<div className='col' key={`coll-${index}`} style={{ marginRight: isTheThirdCol ? 2 : 0.5}}>
									{col.index}
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}