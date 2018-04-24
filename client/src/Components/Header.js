import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {sendMessage} from '../actions'
import '../styles/chatstyles.css'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>

        <header>
        	<Link to="/">Logout</Link>	
          <h1>Slacker</h1>
          	<Link to="signin">Log In / Register</Link>
        </header>

      </div>
    )
  }
}



export default Header