const express = require('express')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

server.get('/login', (request, response) => {
	console.log(request.query)
	response.sendFile(__dirname + '/welcome.html')
})

server.post('/login', (request, response) => {
	console.log(request.body)
	response.sendFile(__dirname + '/welcome.html')
})

server.listen(8080, () => console.log('서버 실행!'))
