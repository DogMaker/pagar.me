const testServer = require('./testServer');

describe('Server', () => {
	it('POST /transactions should respond with 201', async () => {
		const response = await testServer.post('/api/v1/transactions')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')
			.send({
				amount: 1234,
				description: 'Transação de compra de carro',
				payment_method: 'debit_card',
				card_number: '4242424242424242',
				card_holder_name: 'Eu, eu mesmo e Irene',
				card_expiration_date: '2100/06/02',
				card_cvv: 110,
				client_id: 1,
			});
console.log(response.body);
		expect(response.statusCode).toBe(201);
	});


	it('POST /transactions should respond with error 400', async () => {
		const response = await testServer.post('/api/v1/transactions')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')
			.send({
				amount: 1234,
				description: 'Transação de compra de carro',
				payment_method: 'debit_card',
				card_number: '4242424242424242',
				card_holder_name: 'Eu, eu mesmo e Irene',
				card_expiration_date: '2021/06/02',
				card_cvv: 110,
				client_id: Number.MAX_SAFE_INTEGER,
			});

		expect(response.statusCode).toBe(400);
	});

	it('GET /transactions should respond with 200', async () => {
		const response = await testServer.get('/api/v1/transactions')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')

		expect(response.statusCode).toBe(200);
	});

	it('GET /transactions/id should respond with 200', async () => {
		const response = await testServer.get('/api/v1/transactions/1')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')

		expect(response.statusCode).toBe(200);
	});

	it('GET /balance should respond with 200', async () => {
		const response = await testServer.get('/api/v1/balance')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')

		expect(response.statusCode).toBe(200);
	});
	it('GET /rota-invalida should respond with 400', async () => {
		const response = await testServer.get('/api/v1/rota-invalida')
			.set('Authorization','Basic aHVnbzoxMjM0NTY=')

		expect(response.statusCode).toBe(400);
	});
});
