const chai = require("chai");
const game = require("../app/game");
describe("Game of life Tests", () => {
	it("should return the expected grid after one generation", () => {
		const seed = [[".", "o"], [".", "."]];
		const expectation = [[".", "."], [".", "."]];
		const g = game("o", ".", seed, 2, 2);
		const result = g.testStep();

		chai.expect(result).to.eql(expectation);
	});

	it("should return the expected grid after one generation (Scenario 0)", () => {
		const seed = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
		const expectation = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
		const g = game("o", ".", seed, 3, 3);
		const result = g.testStep();

		chai.expect(result).to.eql(expectation);
	});

	it("should return the expected grid after two generations (Scenario 6)", () => {
		const seed = [
			[".", ".", ".", ".", "."],
			[".", ".", "o", ".", "."],
			[".", ".", "o", ".", "."],
			[".", ".", "o", ".", "."],
			[".", ".", ".", ".", "."]
		];
		const expectation = [
			[".", ".", ".", ".", "."],
			[".", ".", ".", ".", "."],
			[".", "o", "o", "o", "."],
			[".", ".", ".", ".", "."],
			[".", ".", ".", ".", "."]
		];

		let g = game("o", ".", seed, 5, 5);
		let result = g.testStep();
		chai.expect(result).to.eql(expectation);

		g = game("o", ".", expectation, 5, 5);
		result = g.testStep();
		chai.expect(result).to.eql(seed);
	});
});
