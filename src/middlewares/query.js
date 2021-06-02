const connection = require('../database')

const verify = async (req, res, next) => {
  const { clientId } = req.query

  const query = `SELECT * from "client" where id = ${clientId}`
  const [client] = await connection.query(query, {
    type: 'SELECT',
  })

  if (!client) {
    const error = new Error('No client ID')
    next(error)
    return
  }

  req.client = client
  delete req.query.clientId

  next()
}

module.exports = {
	verify
};
