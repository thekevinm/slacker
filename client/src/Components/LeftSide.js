import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {sendMessage} from '../actions'
import '../styles/leftside.css'

export class LeftSide extends Component {
  render() {
    return (
      <div className="leftContainer">

		<div className="left">
			<h2>Rooms</h2>
		</div>

		<div className="leftImgnName">
        	<img class="friendImg" src="http://placehold.it/50/50" />
        	<h4>Room Name</h4>
        </div>

      </div>
    )
  }
}



export default LeftSide