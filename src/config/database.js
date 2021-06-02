require('../lib/instrumentation').initEnvironment();

module.exports = {
	dialect: 'postgres',
	host: 'postgres',
	port: 5432,
	database: 'postgres',
	username: 'postgres',
	password: 'supersecret123',
	logging: false,
};
