const Client = require('../database/models/client');
const connection = require('../database')


const getClientId = async (login, password) => {

	const query = `SELECT * from "client" where name = '${login}' and pass = '${password}'`
	const [client] = await connection.query(query, {
		type: 'SELECT',
	})

	return [client]
}
const getClientId2 = async (id) => {

	const query = `SELECT * from "client" where id = '${id}'`
	const [client] = await connection.query(query, {
		type: 'SELECT',
	})

	return [client]
}

module.exports = {
	getClientId,
	getClientId2
};
