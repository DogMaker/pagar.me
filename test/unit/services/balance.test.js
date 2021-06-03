
beforeEach(() => {
  jest.resetModules();
});


describe('#Balance', () => {
  it('Given requested balance then should display a balance information', async () => {

    jest.mock('../../../src/repositories/balance', () => ({
      getPayablesAndItsTransactions: () => '{success: true, name:{}}'
    }))

    const service = require('../../../src/services/balance');
    const data = await service.getBalance(1, {id:1, name: "teste"});

    expect(data.success).toBe(true);
  });

  it('Given something unexpected happens when the requested balance then should return a status false', async () => {

    jest.mock('../../../src/repositories/balance', () => ({
      getPayablesAndItsTransactions: () => console.error()
    }))

    const service = require('../../../src/services/balance');
    const data = await service.getBalance(1, {id:1, name: "teste"});
    console.log(data);
    expect(data.success).toBe(false);
  });
});
