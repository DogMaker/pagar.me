
describe('#transaction', () => {
  it('Given requested the user and pass with correct informations then should pass', async () => {

    jest.mock('../../../src/repositories/client', () => ({
      getClientId: () => '{id: 1, user:"Hugo"}'
    }))

    const service = require('../../../src/services/transaction');
    const data = await service.getClient("user", "Pass");

    expect(data).toBe('{id: 1, user:"Hugo"}');
  });

  it('Given requested an user and pass and BD refuse conncetion then should raise an Exception', async () => {
    //To be inplement in the code
  });
});
