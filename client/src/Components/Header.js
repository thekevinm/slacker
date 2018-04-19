import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {sendMessage} from '../actions'
import '../styles/chatstyles.css'

export class Header extends Component {
  render() {
    return (
      <div>

        <header>
          <h1>Slacker</h1>
        </header>

      </div>
    )
  }
}



export default Header