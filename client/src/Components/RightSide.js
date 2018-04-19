import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {sendMessage} from '../actions'
import '../styles/chatstyles.css'

export class RightSide extends Component {
  render() {
    return (
      <div>

        <div className="right">
         	<h2>Friends</h2>
        </div>	

      </div>
    )
  }
}



export default RightSide