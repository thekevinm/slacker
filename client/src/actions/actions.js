// import io from 'socket.io-client'
// import store from './store'
// import api from './lib/api'
// api.new('/api')

// const socket = io.connect('http://localhost:3001')

// socket.on('message', data => {
// 	addMessage(data)
// })

// export function addMessage(message) {
// 	store.dispatch({
// 		type: 'ADD_MESSAGE',
// 		payload: message
// 	})
// }

// export function sendMessage(message) {
// 	socket.emit('message', {
// 		message: message
// 	})
// }

// export function register(username, password, fn) {
//     console.log('in actions.js registration function')
//     api.register(username, password).then(() => {
//     }).catch(err => {
//         store.dispatch({type:"LOGIN_ERROR",payload:err})
//         console.log(err)
//     })
// }

// export function login(username, password, fn) {
//     api.login(username, password).then(() => {
//     }).catch(err => {
//         store.dispatch({type:"LOGIN_ERROR",payload:err})
//         console.log(err)
//     })
// }