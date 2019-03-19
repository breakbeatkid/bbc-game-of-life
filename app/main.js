("use strict");
const readline = require("readline");
const initGrid = require("./initialiseGrid");
const game = require("./game");

const MAX_VAL = 200;
const MIN_VAL = 0;

var rows = null;
var cols = null;

var dead = null;
var alive = null;

var livingCells = new Array();

process.stdout.write("\x1Bc");

const askQuestion = question => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve, reject) => {
		rl.question(question, answer => {
			resolve(answer);
			rl.close();
		});
	});
};

const inputDimension = async qn => {
	var output;
	var fail = true;
	while (fail) {
		await askQuestion(qn).then(answer => {
			output = parseInt(answer, 10);
			if (!isNaN(output) && output > MIN_VAL && output <= MAX_VAL)
				fail = false;
		});
	}
	return output;
};

const inputSymbol = async qn => {
	var output;
	var fail = true;
	while (fail) {
		await askQuestion(qn).then(answer => {
			output = answer.charAt(0);
			if (answer != "") fail = false;
		});
	}
	return output;
};

const inputCoord = async qn => {
	var output;
	var fail = true;
	while (fail) {
		await askQuestion(qn).then(answer => {
			if (answer === "0") {
				output = parseInt(0, 10);
				fail = false;
			} else if (answer === "") {
				output = "";
				fail = false;
			} else if (isNaN(answer)) {
				fail = true;
			} else {
				output = parseInt(answer, 10);
				if (output >= 0 && output < rows) {
					fail = false;
				}
			}
		});
	}
	return output;
};

const promptUserForConfig = async () => {
	rows = await inputDimension("Please enter number of rows (0<row<=200): ");
	cols = await inputDimension("Please enter number of cols (0<col<=200): ");
	alive = await inputSymbol("Please input the symbol for an alive cell: ");
	dead = await inputSymbol("Please input the symbol for a dead cell: ");
};

const promptUserForSeed = async () => {
	var counter = 0;
	var rc;

	do {
		const coord = await promptForSeedCoord(counter);
		rc = {
			row: coord.row,
			col: coord.col
		};

		if (rc.row !== "" && rc.col !== "") {
			livingCells.push(rc);
			counter++;
		}
	} while (rc.row !== "" && rc.col !== "");
};

const promptForSeedCoord = async counter => {
	var row = await inputCoord(
		`Enter row coord of alive cell ${counter +
			1} (0<=row<${rows}, blank to stop): `
	);

	if (row !== "") {
		var col = await inputCoord(
			`Enter col coord of alive cell ${counter +
				1} (0<=row<${cols}, blank to stop): `
		);
	}
	return {
		row: row,
		col: col
	};
};

const userInput = async () => {
	//Pause and wait for user to finish entering config parameter
	await promptUserForConfig();

	//Pause and wait for user to finish entering seed grid
	await promptUserForSeed();
};

const nextStep = async () => {
	//Check for either enter or 'run' input from user to determine next step
	let qn = "\n";
	let output = false;
	await askQuestion(qn).then(answer => {
		output = answer != "run" ? true : false;
	});
	return output;
};

const main = async () => {
	//Populate variables by user input
	await userInput();

	//Initialise a seeded game grid using user parameters
	let initSeedGrid = initGrid(rows, cols, alive, dead, livingCells);

	//Using the seeded game grid, create a game
	let gameBoard = game(alive, dead, initSeedGrid, rows, cols);

	//Display the initial state of the game grid
	gameBoard.showGrid();

	//Stepped game logic loop
	let stepped = true;
	while (stepped) {
		stepped = await nextStep();
		gameBoard.takeStep();
	}

	//Running game logic loop
	setInterval(() => {
		gameBoard.takeStep();
	}, 100);
};

main();
