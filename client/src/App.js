import React, { Component } from 'react'
import {Chatroom} from './Components/Chatroom'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>

      <header>
        <h1>Slacker</h1>
      </header>
      
      <div className="messages">
        {this.props.messages.map(msg => (
           <div className="messStuff">
              <div className="nameandimg">
                <img src="http://placehold.it/50/50" />
                <h4>Name</h4>
                <h6>timestamp</h6>
              </div>

              <div className="messAge">
                <p>{msg.message}</p>
              </div>

            </div>
          ))}
        </div>

        <Chatroom />

      </div>
  )}
}


function mapStateToProps(state) {
  console.log(state)
  return {
    messages: state.messages

  }

}

export default connect(mapStateToProps)(App)
