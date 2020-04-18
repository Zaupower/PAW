let gameBoard = [
	[0,0,0,1,1,1,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[1,0,0,0,0,0,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0]
];
function getStatusClassName(status) {
	if (status === 0) {
		return '';
	}
	return status > 0 ? 'explode' : 'water';
}

function renderBlock(x, y, status, className) {
	return `
		<span data-x=${ x } data-y=${ y } class="block ${ className } ${ getStatusClassName(status) }"></span>
	`;
}

function renderBoard() {
	let blocks = '';
	for (let i = 0; i < gameBoard.length; i++) {
		const boardRow = gameBoard[i];
		let rowBlocks = '';
		for (let j = 0; j < boardRow.length; j++) {
			const blockStatus = boardRow[j];
			const className = (i+j) % 2 === 0 ? 'even' : 'odd'
			rowBlocks += renderBlock(j, i, blockStatus, className);
			
		}
		blocks += rowBlocks;
	}
	return blocks;
}

