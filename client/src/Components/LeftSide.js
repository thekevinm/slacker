import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {sendMessage} from '../actions'
import '../styles/leftside.css'

class LeftSide extends Component {
  render() {
    return (
      <div className="leftContainer">

		<div className="left">
			<Link to="/AddRoom" className="linktoAdd">+ ADD ROOM</Link>
			<h2 className="titleRooms">Rooms</h2>
		</div>

		<div className="leftImgnName">
        	<h4 className="roomName">Room Name</h4>
        </div>

      </div>
    )
  }
}



export default LeftSide