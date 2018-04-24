const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
const server = http.Server(app)
const io = socketio(server)
const config = require('config')
const bodyParser = require('body-parser')
const authorization = require('./middleware/authorization')
const jwt = require('express-jwt')
const protectedRoutes = require('./routes/protectedRoutes')
const authRoutes = require('./routes/authRoutes')
const path = require('path')
app.use(bodyParser.json())

app.use('/api', authRoutes)
app.use('/api', authorization, protectedRoutes)

server.listen(3001)
//app.listen(3001)

io.on('connection', (socket) => {
	socket.on('message', data => {
		console.log(data)
		io.emit('message', data)
	})
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
  extended: false
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

module.exports = app