const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
const server = http.Server(app)
const io = socketio(server)

server.listen(3001)

io.on('connection', (socket) => {
	socket.on('message', data => {
		console.log(data)
		io.emit('message', data)
	})
})