module.exports = {
	up: queryInterface => queryInterface.bulkInsert('client', [
		{
			id: 1,
			name: 'hugo',
			pass: '123456',
		},
		{
			id: 2,
			name: 'Cli2',
			pass: '123456',
		},
	]),
	down: queryInterface => queryInterface.bulkDelete('client', {}, { truncate: true }),
};
