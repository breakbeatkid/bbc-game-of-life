const neighbourhoodCheck = require("./neighbourhoodCheck");
const scenarioCheck = require("./scenarioCheck");

let alive;
let dead;
let grid;
let rows;
let cols;

let nbCheck;
let sCheck;

module.exports = (a, d, s, rs, cs) => {
	alive = a;
	dead = d;

	grid = s;
	rows = rs;
	cols = cs;

	nbCheck = neighbourhoodCheck(alive, rows, cols);
	sCheck = scenarioCheck(alive, dead);

	return {
		showGrid: showGrid,
		takeStep: takeStep(),
		testStep: calculateNextGeneration
	};
};

function takeStep() {
	return () => {
		grid = calculateNextGeneration(grid);
		showGrid();
	};
}

function showGrid() {
	process.stdout.write("\x1Bc");
	for (let r = 0; r < rows; r++) {
		let rowOut = "";
		for (let c = 0; c < cols; c++) {
			rowOut += grid[r][c];
		}
		console.log(rowOut);
	}
}

function calculateNextGeneration() {
	let output = new Array();
	for (let row = 0; row < rows; row++) {
		output[row] = new Array();
		for (let col = 0; col < cols; col++) {
			let nbCount = nbCheck(row, col, grid);
			output[row][col] = sCheck(grid[row][col], nbCount);
		}
	}
	return output;
}
