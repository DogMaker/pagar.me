const service = require('../../../src/services/transaction');


describe('#transaction', () => {
  it('Given requested transaction with correct informations then should pass', async () => {

    const payload = { client_id: 20, card_holder_name: "Hugo", card_cvv: 10, amount: 5}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(true);
  });

  it('Given requested transaction without a name node then should display a message validation', async () => {

    const payload = { amount:1 }

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe('"card_holder_name" is required');
  });

  it('Given requested transaction with a null name then should display a message validation', async () => {

    const payload = { card_holder_name: "" }

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"card_holder_name\" is not allowed to be empty");
  });

  it('Given requested transaction without a name node card_cvv then should display a message validation', async () => {

    const payload = { card_holder_name: "Hugoo" }

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"card_cvv\" is required");
  });

  it('Given requested transaction with a null card_cvv then should display a message validation', async () => {

    const payload = { card_holder_name: "Hugo", card_cvv: null}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"card_cvv\" contains an invalid value");
  });

  it('Given requested transaction with a empty card_expiration_date value then should display a message validation', async () => {

    const payload = { card_holder_name: "Hugo", card_cvv: 10, card_expiration_date: ""}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"card_expiration_date\" is not allowed to be empty");
  });

  it('Given requested transaction with invalid payment_method value then should display a message validation', async () => {

    const payload = { payment_method: "Hugo"}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"payment_method\" must be one of [debit_card, credit_card]");
  });

  it('Given requested transaction with invalid card_number value then should display a message validation', async () => {

    const payload = { card_number: "4242424242424241"}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"card_number\" must be a credit card");
  });

  it('Given requested transaction with a long value of client_id then should display a message validation of range limit', async () => {

    const payload = { client_id: 200000, card_holder_name: "Hugo", card_cvv: 10}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"client_id\" must be less than or equal to 20000");
  });

  it('Given requested transaction with a negative amount then should display a message validation', async () => {

    const payload = { client_id: 200000, card_holder_name: "Hugo", card_cvv: 10, amount: -1}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"amount\" must be larger than or equal to 1");
  });

  it('Given requested transaction with a higher amount then should display a message validation', async () => {

    const payload = { client_id: 200000, card_holder_name: "Hugo", card_cvv: 10, amount: 50000000}

    const data = await service.isValidRequest(payload);

    expect(data.isValid).toBe(false);
    expect(data.message).toBe("\"amount\" must be less than or equal to 10000");
  });
});
