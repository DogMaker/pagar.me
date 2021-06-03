const service = require('../../../src/services/transaction');


describe('#transaction', () => {
  it('Given requested transaction with previous date then should raise an message of validation', async () => {

    const data = await service.isValidDate({card_expiration_date: '2020/06/06'});

    expect(data.isValidDate).toBe(false);
    expect(data.messageDate).toBe("The date must to be grater than or equal to today");

  });

  it('Given requested transaction with future date then should pass', async () => {

    const data = await service.isValidDate({card_expiration_date: '2100/06/06'});

    expect(data).toBe(undefined);
  });
});
