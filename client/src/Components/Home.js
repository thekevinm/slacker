import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Header'
import ChatForm from './ChatForm'
import '../styles/home.css'
// import RightSide from './RightSide'
import LeftSide from './LeftSide'
// var time = new Date()
// var goodtime = time.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})

class Home extends Component {
	static defaultProps = {
    	messages: []
  	}

  	// componentDidMount() {
  	// 	const time = new Date()
  	// 	const goodtime = time.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
  	// }

  	

	render() {
		return (
			<div>

				{this.props.isAuthenticated ? (
				<div>
				<Header />

				<div className="homeContainer">

				<LeftSide />

					<div className="messages">

						<div className="chat">
							<ChatForm />
						</div>

	          			{this.props.messages.map((msg, i) => (
	             			<div className="messStuff">
	                			<div className="nameandimg">
	                  				<h4 className="chatName">{msg.username}</h4>
	                  				<h6>{msg.timestamp}</h6>
	                			</div>

	                			<div className="messAge">
	                  				<p key={'message' + i}>{msg.message}</p>
	                			</div>

	              			</div>
	            		))}
         			</div>
					
         			
         			</div>

				</div>
				) : <Redirect to="/signin" />}

			</div>
		)
	}
}

// <RightSide />

function mapStateToProps(state) {
  console.log(state)
  return {
    messages: state.messageReducer.messages.filter(message => message.roomname === state.messageReducer.currentRoom),
    isAuthenticated: state.authReducer.isAuthenticated

  }

}

export default connect(mapStateToProps)(Home)