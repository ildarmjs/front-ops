import express from 'express'
import fetch from 'node-fetch'
const app = express()

const DATE_SERVICE_HOST =
	process.env.DATE_SERVICE_HOST || 'http://localhost:3005/'
app.get('/', (req, res) => {
	fetch(DATE_SERVICE_HOST)
		.then(res => res.json())
		.then(data => res.send(`Hello current date is ${data}\n`))
})

app.listen(3000, () => {
	console.log('Ready')
})
