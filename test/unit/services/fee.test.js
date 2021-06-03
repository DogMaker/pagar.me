const service = require('../../../src/services/fee');

describe('#Fees', () => {
  it('Given call the calculation of credit_card when submit a value of 100 then should return 5% of fee ', async () => {
    const data = await service.getFeeAmount(100, "credit_card");

    expect(data).toBe(5);
  });

  it('Given call the calculation of debit_card when submit a value of 100 then should return 3% of fee ', async () => {
    const data = await service.getFeeAmount(100, "debit_card");

    expect(data).toBe(3);
  });

  it('Given call the calculation of anyValueType when submit then should raise an Error with message ', async () => {
    //To be implement in the code, today returns 0.
  });
});
