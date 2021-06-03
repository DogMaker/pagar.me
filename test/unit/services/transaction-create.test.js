
describe('#transaction', () => {
  it('Given requested transaction with correct informations then should pass', async () => {


    jest.mock('../../../src/repositories/transaction', () => ({
      create: () => '{ client_id: 20, card_holder_name: "Hugo", card_cvv: 10, amount: 5}'
    }))

    const service = require('../../../src/services/transaction');
    const payload = { client_id: 20, card_holder_name: "Hugo", card_cvv: 10, amount: 5}

    const data = await service.create(payload, 'visa');

    console.log(data);

    expect(data.created).toBe(true);
  });
});
