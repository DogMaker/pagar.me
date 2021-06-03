const app = require('express')();
const service = require('../services/transaction')


module.exports =  app.use((req, res, next) => {

		const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
		const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

		const userId = service.getClient(login, password)
		.then((user)=>{

			if(user[0] === undefined){
				res.status(401).send({ error:'There was a problem with the user or password!'} )
				return next()
			}

			if (login && password && login === user[0].name && password === user[0].pass) {
				req.client = user[0]
				return next()
			}

			res.status(401).send({ error:'Authentication required'} )
		});
	});
