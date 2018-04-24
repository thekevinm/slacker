import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {sendMessage} from '../actions'
import '../styles/addroom.css'

export class AddRoom extends Component {
  render() {
    return (
      <div>

      <header>
        <h1>Create A Room</h1>
        <Link to="/">Back</Link>
      </header>

      <div className="roomContainer">

        <form action="makeroom" method="post" enctype="multipart/form-data">

          <fieldset>
            <legend>Room Name</legend>
              <input className="loginInput" placeholder="Room Name" type="text" name="roomname" />
          
            <div className="roomUploadImg">  
              <h5>Upload A Room Picture:</h5>
              <input className="roomImgUpload" type="file" name="roomImg" formenctype="multipart/form-data"/>
            </div>

            <button className="roomButton" type="submit">Create Room</button>

          </fieldset>

        </form>

      </div>

      </div>
    )
  }
}



export default AddRoom