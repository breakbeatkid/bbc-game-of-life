const chai = require("chai");
const initialiseGrid = require("../app/initialiseGrid");

describe("Initialise Grid tests", () => {
	it("returns an empty grid when given an empty seed", () => {
		const expectation = [[".", "."], [".", "."]];
		const seed = new Array();
		const real = initialiseGrid(2, 2, "o", ".", seed);
		chai.expect(real).to.eql(expectation);
	});

	it("returns a grid with correct dimensions", () => {
		const seed = new Array();
		const expRows = 2;
		const expCols = 2;
		const real = initialiseGrid(expRows, expCols, "o", ".", seed);
		const realRows = real.length;
		const realCols = real[0].length;

		chai.expect(realRows).to.eql(expRows);
		chai.expect(realCols).to.eql(expCols);
	});

	it("returns correct grid when given a populated seed", () => {
		const expectation = [[".", "o"], [".", "o"]];
		const seed = [{ row: 0, col: 1 }, { row: 1, col: 1 }];
		const real = initialiseGrid(2, 2, "o", ".", seed);
		chai.expect(real).to.eql(expectation);
	});
});
