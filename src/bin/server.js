require('../lib/instrumentation').initEnvironment();
const database = require('../database');
const server = require('../server');
const { port } = require('../config/app');

const initializeDatabase = () => database.sync({ force: true })

;(async function run () {
	try {
		await initializeDatabase();
		server.listen(port, () => console.log(`Servidor escutando na porta : ${port}`));
	} catch (err) {
		console.error(err);
	}
}());
