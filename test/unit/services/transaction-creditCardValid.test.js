const service = require('../../../src/services/transaction');


describe('#transaction', () => {
  it('Given requested a validation for creditCard with incorrect information then should return a invalid type', async () => {
    const data = await service.creditCardValid(44444444);

    expect(data.isCredCardValid).toBe(false);
  });

  it('Given requested a validation for creditCard visa information then should return a visa company', async () => {
    const data = await service.creditCardValid(4242424242424242);

    expect(data.company).toBe('visa');
  });

  it('Given requested a validation for creditCard mastercard information then should return a visa company', async () => {
    const data = await service.creditCardValid(5127173034311839);

    expect(data.company).toBe('mastercard');
  });

  it('Given requested a validation for diners-club visa information then should return a diners-club company', async () => {
    const data = await service.creditCardValid(30036592321275);

    expect(data.company).toBe('diners-club');
  });
});
