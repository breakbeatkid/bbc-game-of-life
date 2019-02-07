module.exports = (alive, dead) => {
	return function scenarioCheck(currentState, nbCount) {
		if ((nbCount === 2 || nbCount === 3) && currentState == alive)
			return alive;
		if (nbCount === 3 && currentState == dead) return alive;
		return dead;
	};
};
