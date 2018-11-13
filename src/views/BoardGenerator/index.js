



function populateShips(board, numShips) {
	let i = 0
	while ( i < numShips) {
		let y = Math.floor(Math.random() * (board.length));
		let x = Math.floor(Math.random() * (board[0].length));

		if ( !board[y][x].ship) {
			board[y][x].ship = true;
			i++;
		}
	}

	return board;
}

function createBoard(width, height) {
	let board = [], i = 0, j = 0;

	while ( i < width) {
		let line = [];

		while ( j < height ) {
			line.push({discovered: false, ship: false});
			j++;
		}
		board.push(line);
		j = 0;
		i++
	}
	return board;
}

export function generate(width, height, numShips) {
	let board = createBoard(width, height);
	return populateShips(board, numShips);
}
