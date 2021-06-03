beforeEach(() => {
  jest.resetModules();
});

describe('#transaction', () => {
  it('Given requested the a transaction with correct informations then should pass', async () => {

    jest.mock('../../../src/repositories/transaction', () => ({
      find: () => '{id: 1, amount:10}'
    }))

    const service = require('../../../src/services/transaction');
    const data = await service.find({id: 1});

    expect(data).toBe('{id: 1, amount:10}');
  });

  it('Given requested the a transaction with incorrect id informations then should raise an Error', async () => {

    jest.mock('../../../src/repositories/transaction', () => ({
      find: () => console.error("invalid Pk")
    }))

    const service = require('../../../src/services/transaction');
    const data = await service.find({id: 1});
    console.log(data);

    expect(data).toBe(undefined);
  });
});
