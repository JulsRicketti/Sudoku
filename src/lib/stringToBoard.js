export default function stringToBoard (str) {
	const acceptableCharacters = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	const splitStr = str.split('')

	if (str.length !== 81) {
		throw new Error(`Invalid string. Must be 81 characters, found ${str.length}`)
	}

	const hasOnlyValidCharacters = splitStr.every(character => acceptableCharacters.includes(character))
	if (!hasOnlyValidCharacters) {
		throw new Error (`Invalid characters in string, must only be numbers 1 to 9 or "."`)
	}

	const DIMENSION = 9
	const board = []

	let splitStrCount = 0
	for (let i=0; i<DIMENSION; i++) {
		const cols = []
		for (let j=0; j<DIMENSION; j++) {
			const value = splitStr[splitStrCount]
			const editable = value === '.' // editable if the current character is "."
			cols.push({ index: j, row: i, value: editable ? '' : value, editable })
			splitStrCount++
		}
		board.push({
			index: i,
			cols
		})
	}

	return board
}