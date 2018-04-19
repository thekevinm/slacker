import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Header} from './Header'
import {ChatForm} from './ChatForm'
import '../styles/home.css'
import {RightSide} from './RightSide'
import {LeftSide} from './LeftSide'

class Home extends Component {
	static defaultProps = {
    	messages: []
  	}
	render() {
		return (
			<div>

				<Header />

				<div className="homeContainer">

				<LeftSide />

					<div className="messages">

						<div className="chat">
							<ChatForm />
						</div>

	          			{this.props.messages.map(msg => (
	             			<div className="messStuff">
	                			<div className="nameandimg">
	                  				<img src="http://placehold.it/50/50" />
	                  				<h4>Name</h4>
	                  				<h6>5:15pm</h6>
	                			</div>

	                			<div className="messAge">
	                  				<p>{msg.message}</p>
	                			</div>

	              			</div>
	            		))}
         			</div>
					
         			<RightSide />

				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
  console.log(state)
  return {
    messages: state.messages

  }

}

export default connect(mapStateToProps)(Home)