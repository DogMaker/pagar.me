/* eslint-disable */
const service = require('../services/transaction')

const findAll = async (req, res) => {

  const transactions = await service.findAll(req.client.id)

  return res.status(200).send(transactions)
}

const create = async ({ body }, res) => {
  const { card_number } = body

  const { isValid, message } = service.isValidRequest(body)

  const currentDate = new Date();
  givenDate = new Date(body.card_expiration_date);

  if(givenDate < currentDate){
    return res.status(400).send({ error: "The date must to be grater than or equal to today" })
  }

  if (!isValid) {
    return res.status(400).send({ message })
  }

  const {
    isCredCardValid,
    company,
  } = service.creditCardValid(card_number)

  await service.getClientById(body.client_id)
  .then((user)=>{
    if(user[0] === undefined){
      return res.status(400).send({ error: "The client_id does not exist in our data base" })
    }
  });

  const { created, transactionCreated } = await service
    .create(body, company)



  return res.status(201).send(transactionCreated)
}

const find = async ({ params }, res) => {
  const { id } = params

  if (isNaN(id)) {
    return res.status(400).send({ error: "The parameter id must be a number" })
  }

  const transaction = await service.find(id)

  if (transaction === null) {
    return res.status(400).send({ error: "There is no transaction with this id" })
  }

  console.log(transaction)

  return res.status(200).send(transaction)
}

module.exports = {
  findAll,
  create,
  find,
}
