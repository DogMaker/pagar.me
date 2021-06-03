
describe('#transaction', () => {
  it('Given requested transaction with correct informations then should pass', async () => {

    jest.mock('../../../src/repositories/transaction', () => ({
      findAll: () => '{id: 1, transactions:1'
    }))

    const service = require('../../../src/repositories/transaction');
    const data = await service.findAll(1);

    expect(data).toBe('{id: 1, transactions:1');
  });

  it('Given requested transaction and BD refuse conncetion then should raise an Exception', async () => {
    //To be inplement in the code
  });
});
