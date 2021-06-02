module.exports = {
	rootDir: '../',
	collectCoverage: true,
	coverageReporters: ['json','lcov'],
	verbose: false,
	bail: true,
	testEnvironment: 'node',
	testMatch: [
		'**/test/**/*.test.js',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 50
		}
	}
};
