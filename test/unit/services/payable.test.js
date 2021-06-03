const service = require('../../../src/services/payable');


describe('#Payable', () => {
  it('Given call the payable of credit_card type when submit a value of 100 then should return waiting_funds status ', async () => {
    const data = await service.createPayableObject({amount: 100, payment_method: "credit_card"});

    expect(data.status).toBe("waiting_funds");
  });

  it('Given call the payable of debit_card type when submit a value of 100 then should return paid status ', async () => {
    const data = await service.createPayableObject({amount: 100, payment_method: "debit_card"});

    expect(data.status).toBe("paid");
  });

  it('Given call the payable of anyValueType when submit a value of 100 then should return waiting_funds ', async () => {
    //to be inplemented exception validations like negative value , and diferent types of payments
  });
});
