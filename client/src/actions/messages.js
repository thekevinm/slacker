import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://localhost:3001')
// const socket = io.connect('http://http://10.68.0.123:3001/')

socket.emit('join', {room: store.getState().messageReducer.currentRoom})

socket.on('message', data => {
  addMessage(data)
})

socket.on('update rooms', rooms => {
  updateRooms(rooms)
})

export function joinRoom(room) {
  socket.emit('join', {room: room})
  store.dispatch({
    type: 'JOIN_ROOM',
    payload: room
  })
}

export function addMessage(message) {
  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: message
  })
}

export function sendMessage(message) {
const username = store.getState().authReducer.username
const roomname = store.getState().messageReducer.currentRoom
const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})

socket.emit('message', {
  username: username,
  message: message,
  roomname: roomname,
  timestamp: timestamp
    })
}

export function updateRooms(rooms) {
	store.dispatch({
		type: 'UPDATE_ROOMS',
		payload: rooms
	})
}

export function createRoom(room) {
	socket.emit('create room', room)
}