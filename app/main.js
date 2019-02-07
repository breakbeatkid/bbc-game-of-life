("use strict");

const readline = require("readline");
const initGrid = require("./initialiseGrid");
const game = require("./game");

var rows = null;
var cols = null;
var dead = null;
var alive = null;
var livingCells = new Array();

process.stdout.write("\x1Bc");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const askQuestion = question => {
	return new Promise((resolve, reject) => {
		rl.question(question, answer => {
			resolve(answer);
		});
	});
};

const promptForConfig = async () => {
	var fail;

	do {
		fail = true;
		let qn = "Please enter integer number of rows (200 >= row > 0): ";
		await askQuestion(qn).then(answer => {
			let r = parseInt(answer, 10);

			if (!isNaN(r) && r > 0 && r <= 200) {
				rows = r;
				fail = false;
			}
		});
	} while (fail);

	do {
		fail = true;
		let qn = "Please enter integer number of cols (200 >= row > 0): ";
		await askQuestion(qn).then(answer => {
			let c = parseInt(answer, 10);

			if (!isNaN(c) && c > 0 && c <= 200) {
				cols = c;
				fail = false;
			}
		});
	} while (fail);

	do {
		fail = true;
		let qn = "Please input the symbol for an alive cell: ";
		await askQuestion(qn).then(answer => {
			let a = answer;
			if (a != "") {
				alive = a.charAt(0);
				fail = false;
			}
		});
	} while (fail);

	do {
		fail = true;
		let qn = "Please input the symbol for a dead cell: ";
		await askQuestion(qn).then(answer => {
			let d = answer;
			if (d != "") {
				dead = d.charAt(0);
				fail = false;
			}
		});
	} while (fail);

	console.log(rows);
	console.log(cols);
	console.log(alive);
	console.log(dead);
};

const promptForSeed = async () => {
	var counter = 0;
	var rc;

	do {
		const coord = await promptForSeedCoord(counter);
		rc = {
			row: coord.row,
			col: coord.col
		};

		if (!(rc.row == "" || rc.col == "")) {
			livingCells.push(rc);
			counter++;
		}
	} while (rc.row != "" && rc.col != "");
};

const promptForSeedCoord = async counter => {
	var row = null;
	var col = null;

	do {
		fail = true;
		let qn =
			"Enter row coord of seed point " +
			(counter + 1) +
			" (1 < row <= rows, blank to stop): ";
		await askQuestion(qn).then(answer => {
			let r = parseInt(answer, 10);
			if (answer == "" || (!isNaN(r) && r >= 0 && r < rows)) {
				row = answer == "" ? answer : r;
				fail = false;
			}
		});
	} while (fail);

	if (row != "") {
		do {
			fail = true;
			let qn =
				"Enter col coord of seed point " +
				(counter + 1) +
				" (1 < col <= cols, blank to stop): ";
			await askQuestion(qn).then(answer => {
				let c = parseInt(answer, 10);
				if (answer == "" || (!isNaN(c) && c >= 0 && c < cols)) {
					col = answer == "" ? answer : c;
					fail = false;
				}
			});
		} while (fail);
	}

	return {
		row: row,
		col: col
	};
};

const userInput = async () => {
	await promptForConfig();
	await promptForSeed();
	rl.close();
};

const main = async () => {
	await userInput();
	let initSeedGrid = initGrid(rows, cols, alive, dead, livingCells);
	let gameBoard = game(alive, dead, initSeedGrid, rows, cols);
	gameBoard.showGrid();

	setInterval(() => {
		gameBoard.takeStep();
	}, 1500);
};

main();
