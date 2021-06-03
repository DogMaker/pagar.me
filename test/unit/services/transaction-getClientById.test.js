
describe('#transaction', () => {
  it('Given requested the user by ID with correct informations then should pass', async () => {

    jest.mock('../../../src/repositories/client', () => ({
      getClientId2: () => '{id: 1, user:"Hugo"}'
    }))

    const service = require('../../../src/services/transaction');
    const data = await service.getClientById(1);

    expect(data).toBe('{id: 1, user:"Hugo"}');
  });
});
