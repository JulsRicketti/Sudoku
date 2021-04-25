import createEmptyBoard from './createEmptyBoard'

export default function generate () {
	const emptyBoard = createEmptyBoard()
	// Creating hard coded value for now
	// return emptyBoard
	return [
		{
			index: 0,
			cols: [
				{ row: 0, index: 0, value: '8', editable: false },
				{ row: 0, index: 1, value: '5', editable: false },
				{ row: 0, index: 2, value: '6', editable: false },
				{ row: 0, index: 3, value: '', editable: true },
				{ row: 0, index: 4, value: '1', editable: false },
				{ row: 0, index: 5, value: '4', editable: false },
				{ row: 0, index: 6, value: '7', editable: false },
				{ row: 0, index: 7, value: '3', editable: false },
				{ row: 0, index: 8, value: '', editable: true },
			]
		},
		{
			index: 1,
			cols: [
				{ row: 1, index: 0, value: '', editable: true },
				{ row: 1, index: 1, value: '9', editable: false },
				{ row: 1, index: 2, value: '', editable: true },
				{ row: 1, index: 3, value: '', editable: true },
				{ row: 1, index: 4, value: '', editable: true },
				{ row: 1, index: 5, value: '', editable: true },
				{ row: 1, index: 6, value: '', editable: true },
				{ row: 1, index: 7, value: '', editable: true },
				{ row: 1, index: 8, value: '', editable: true },
			]
		},
		{
			index: 2,
			cols: [
				{ row: 2, index: 0, value: '2', editable: false },
				{ row: 2, index: 1, value: '4', editable: false },
				{ row: 2, index: 2, value: '', editable: true },
				{ row: 2, index: 3, value: '', editable: true },
				{ row: 2, index: 4, value: '', editable: true },
				{ row: 2, index: 5, value: '', editable: true },
				{ row: 2, index: 6, value: '1', editable: false },
				{ row: 2, index: 7, value: '6', editable: false },
				{ row: 2, index: 8, value: '', editable: true },
			]
		},
		{
			index: 3,
			cols: [
				{ row: 3, index: 0, value: '', editable: true },
				{ row: 3, index: 1, value: '6', editable: false },
				{ row: 3, index: 2, value: '2', editable: false },
				{ row: 3, index: 3, value: '', editable: true },
				{ row: 3, index: 4, value: '5', editable: false },
				{ row: 3, index: 5, value: '9', editable: false },
				{ row: 3, index: 6, value: '3', editable: false },
				{ row: 3, index: 7, value: '', editable: true },
				{ row: 3, index: 8, value: '', editable: true },
			]
		},
		{
			index: 4,
			cols: [
				{ row: 4, index: 0, value: '', editable: true },
				{ row: 4, index: 1, value: '3', editable: false },
				{ row: 4, index: 2, value: '1', editable: false },
				{ row: 4, index: 3, value: '8', editable: false },
				{ row: 4, index: 4, value: '', editable: true },
				{ row: 4, index: 5, value: '2', editable: false },
				{ row: 4, index: 6, value: '4', editable: false },
				{ row: 4, index: 7, value: '5', editable: false },
				{ row: 4, index: 8, value: '', editable: true },
			]
		},
		{
			index: 5,
			cols: [
				{ row: 5, index: 0, value: '', editable: true },
				{ row: 5, index: 1, value: '', editable: true },
				{ row: 5, index: 2, value: '5', editable: false },
				{ row: 5, index: 3, value: '3', editable: false },
				{ row: 5, index: 4, value: '4', editable: false },
				{ row: 5, index: 5, value: '', editable: true },
				{ row: 5, index: 6, value: '9', editable: false },
				{ row: 5, index: 7, value: '2', editable: false },
				{ row: 5, index: 8, value: '', editable: true },
			]
		},
		{
			index: 6,
			cols: [
				{ row: 6, index: 0, value: '', editable: true },
				{ row: 6, index: 1, value: '2', editable: false },
				{ row: 6, index: 2, value: '4', editable: false },
				{ row: 6, index: 3, value: '', editable: true },
				{ row: 6, index: 4, value: '', editable: true },
				{ row: 6, index: 5, value: '', editable: true },
				{ row: 6, index: 6, value: '', editable: true },
				{ row: 6, index: 7, value: '7', editable: false },
				{ row: 6, index: 8, value: '3', editable: false },
			]
		},
		{
			index: 7,
			cols: [
				{ row: 7, index: 0, value: '', editable: true },
				{ row: 7, index: 1, value: '', editable: true },
				{ row: 7, index: 2, value: '', editable: true },
				{ row: 7, index: 3, value: '', editable: true },
				{ row: 7, index: 4, value: '', editable: true },
				{ row: 7, index: 5, value: '', editable: true },
				{ row: 7, index: 6, value: '', editable: true },
				{ row: 7, index: 7, value: '1', editable: false },
				{ row: 7, index: 8, value: '', editable: true },
			]
		},
		{
			index: 8,
			cols: [
				{ row: 8, index: 0, value: '', editable: true },
				{ row: 8, index: 1, value: '1', editable: false },
				{ row: 8, index: 2, value: '8', editable: false },
				{ row: 8, index: 3, value: '6', editable: false },
				{ row: 8, index: 4, value: '3', editable: false },
				{ row: 8, index: 5, value: '', editable: true },
				{ row: 8, index: 6, value: '2', editable: false },
				{ row: 8, index: 7, value: '9', editable: false },
				{ row: 8, index: 8, value: '4', editable: false },
			]
		},
	]
}