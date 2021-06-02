const Transaction = require('../database/models/transaction');
const Payable = require('../database/models/payable');

const getPayablesAndItsTransactions = (clientId) => Payable.findAll({
	include: [{
		model: Transaction,
		where: {
			client_id: clientId
		},
	}],
});

module.exports = {
	getPayablesAndItsTransactions
};
