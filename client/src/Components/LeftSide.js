import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import {sendMessage} from '../actions'
import '../styles/leftside.css'
import {connect} from 'react-redux'
import {joinRoom, createRoom} from '../actions/messages'

class LeftSide extends Component {
  state = {
    roomname: ''
  }

  callRoom = (room) => {
    joinRoom(room)
  }

  handleChange = (e) => {
    this.setState({
      roomname: e.target.value
    })
  }

  createRoom = (e) => {
    e.preventDefault()
      if(this.state.roomname !== ''){
      createRoom(this.state.roomname)
      this.setState({roomname:''})
    }
  }


  render() {
    return (
      <div className="leftContainer">

		<div className="left">
			<h2 className="titleRooms">Rooms</h2>
        <form id="createRoom" onSubmit={this.createRoom}>
          <input type="text" onChange={this.handleChange} className="roomInput" placeholder="Add a Room" value={this.state.roomname} />
          <button className ="addRoomButt" type="submit">+</button>
        </form>
		</div>

    <ul className="leftImgnName">
    {this.props.rooms.map((room,i) => (
        	<li key={'room' + i} onClick={() => this.callRoom(room)} className={room === this.props.currentRoom ? 'current' : ''}>
            {room}
          </li>
        ))}
    </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.messageReducer.rooms,
    currentRoom: state.messageReducer.currentRoom
  }
}


export default connect(mapStateToProps)(LeftSide)