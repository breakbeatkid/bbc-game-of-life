const chai = require("chai");
const neighbourhoodCheck = require("../app/neighbourhoodCheck");

describe("Neighbourhood Check tests", () => {
	const nbCheck = neighbourhoodCheck("o", 3, 3);

	it("returns 0 when single living cell", () => {
		const expectation = 0;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [[".", ".", "."], [".", "o", "."], [".", ".", "."]];
		const rows = 3;
		const cols = 3;

		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("returns 0 when no living cell (Scenario 5)", () => {
		const expectation = 0;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
		const rows = 3;
		const cols = 3;

		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("returns 8", () => {
		const expectation = 8;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [["o", "o", "o"], ["o", "o", "o"], ["o", "o", "o"]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("returns 7", () => {
		const expectation = 7;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [["o", "o", "o"], ["o", "o", "o"], ["o", "o", "."]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("returns 7", () => {
		const expectation = 7;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [["o", "o", "o"], ["o", "o", "."], ["o", "o", "o"]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("returns 7", () => {
		const expectation = 7;
		const row = 1;
		const col = 1;
		const alive = "o";
		const grid = [[".", "o", "o"], ["o", "o", "o"], ["o", "o", "o"]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("wraps around top corner 1", () => {
		const expectation = 2;
		const row = 0;
		const col = 0;
		const alive = "o";
		const grid = [["o", ".", "."], [".", "o", "."], [".", ".", "o"]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("wraps around top corner 2", () => {
		const expectation = 4;
		const row = 0;
		const col = 0;
		const alive = "o";
		const grid = [["o", "o", "o"], ["o", ".", "."], ["o", ".", "."]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});

	it("wraps around bottom corner", () => {
		const expectation = 4;
		const row = 3;
		const col = 3;
		const alive = "o";
		const grid = [[".", ".", "o"], [".", ".", "o"], ["o", "o", "."]];
		const rows = 3;
		const cols = 3;
		const nbCount = nbCheck(row, col, grid);
		chai.expect(nbCount).to.equal(expectation);
	});
});
