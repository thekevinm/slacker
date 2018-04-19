import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {sendMessage} from '../actions'
import '../styles/chatstyles.css'

export class Chatroom extends Component {
  state = {
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div className="container">


        

        <div className="formStuff">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Chat Now" type="text" name="message" value={this.state.message} />
          <button type="submit">Chat</button>
        </form>
        </div>

      </div>
    )
  }
}



export default Chatroom






