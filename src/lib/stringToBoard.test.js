import stringToBoard from './stringToBoard'

test('should error when there are less than 81 characters', () => {
	const testStringToBoard = () => stringToBoard('123')
	expect(testStringToBoard).toThrow()
})

test('should error with when any invalid characters are present', () => {
	const testStringToBoard = () => stringToBoard('A.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......')
	expect(testStringToBoard).toThrow()
})

test('should successfully generate board from a string', () => {
	const DIMENSION = 9
	const board = stringToBoard('4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......')

	expect(board.length).toEqual(DIMENSION)

	board.forEach((row, index) => {
		const { cols } = row
		expect(cols.length).toEqual(DIMENSION)
		cols.forEach((cell) => {
			const { row, value, editable } = cell
			expect(row).toEqual(index)
			expect(['', '1', '2', '3', '4', '5', '6', '7', '8', '9']).toContain(value)
			expect(editable).toEqual(!!value)
		})
	})

})