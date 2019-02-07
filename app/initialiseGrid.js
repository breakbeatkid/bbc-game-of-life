module.exports = function(rows, cols, alive, dead, seed) {
	return createSeededGrid(rows, cols, alive, dead, seed);
};

function createSeededGrid(rows, cols, alive, dead, seed) {
	var grid = blankGrid(rows, cols, dead);
	for (let i = 0; i < seed.length; i++) {
		grid[seed[i].row][seed[i].col] = alive;
	}
	return grid;
}

function blankGrid(rows, cols, dead) {
	let output = new Array();
	for (let row = 0; row < rows; row++) {
		output[row] = new Array();
		for (let col = 0; col < cols; col++) output[row][col] = dead;
	}
	return output;
}
