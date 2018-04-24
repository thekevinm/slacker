import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {sendMessage} from '../actions'
import '../styles/rightside.css'

class RightSide extends Component {
  render() {
    return (
      <div className="rightContainer">

        <div className="right">
         	<h2>Friends</h2>
        </div>

        <div className="rightImgnName">
        	<h4 className="friendName">Kevin</h4>
        </div>	

      </div>
    )
  }
}



export default RightSide