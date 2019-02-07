const chai = require("chai");
const scenarioCheck = require("../app/scenarioCheck");

describe("Scenario Check tests", () => {
	const alive = "o";
	const dead = ".";
	const sCheck = scenarioCheck(alive, dead);

	it("should return dead when alive with less than 2 neighbours (Scenario 1)", () => {
		const currentState = alive;
		const nbCount1 = 1;
		const nbCount2 = 0;
		const result1 = sCheck(currentState, nbCount1);
		const result2 = sCheck(currentState, nbCount2);

		chai.expect(result1).to.equal(dead);
		chai.expect(result2).to.equal(dead);
	});

	it("should return dead when alive with more than 3 neighbours (Scenario 2)", () => {
		const currentState = alive;
		const nbCount = 4;
		const result = sCheck(currentState, nbCount);

		chai.expect(result).to.equal(dead);
	});

	it("should return alive when alive with 2 or 3 neighbours (Scenario 3)", () => {
		const currentState = alive;
		const nbCount1 = 2;
		const nbCount2 = 3;
		const result1 = sCheck(currentState, nbCount1);
		const result2 = sCheck(currentState, nbCount2);

		chai.expect(result1).to.equal(alive);
		chai.expect(result2).to.equal(alive);
	});

	it("should return alive when dead with exactly 3 neighbours (Scenario 4)", () => {
		const currentState = dead;
		const nbCount = 3;
		const result = sCheck(currentState, nbCount);

		chai.expect(result).to.equal(alive);
	});
});
