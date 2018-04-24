import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {sendMessage} from '../actions/messages'
import '../styles/chatstyles.css'

class ChatForm extends Component {
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
          <input autoComplete="off" className="chatInput" onChange={this.handleChange} placeholder="Chat Now" type="text" name="message" value={this.state.message} />
          <button className="chatButton" type="submit">Chat</button>
        </form>
        </div>

      </div>
    )
  }
}



export default ChatForm






