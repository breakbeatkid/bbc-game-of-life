module.exports = (alive, rows, cols) => {
	return function neighbourhoodCheck(row, col, grid) {
		let count = 0;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				let r = (row + i + rows) % rows;
				let c = (col + j + cols) % cols;
				if (grid[r][c] == alive && !(r == row && c == col)) {
					count++;
				}
			}
		}
		return count;
	};
};
