import React, { Component } from 'react'
import '../styles/loginresgister.css'
// import {Header} from './Header'
import {withRouter} from 'react-router-dom'
import {register} from '../actions/auth'

class LoginForm extends Component {
	state = {
		username: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		register(this.state.username, this.state.password, () => {
			this.props.history.push('/')
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

  render() {
    return (
      <div>

	  <div className="loginnregisterContainer">

	    <div className="loginStuff">
			
				<fieldset>
					<legend>Login</legend>
					<form onSubmit={this.handleSubmit}>
						<input value={this.state.username} onChange={this.handleChange} className="loginInput" placeholder="Username" type="text" name="username" />
						<input className="loginInput" placeholder="Password" type="password" name="password" />
						<button className="loginButton" type="submit">Login</button>
					</form>
				</fieldset>

		</div>

		</div>

      </div>
    )
  }
}



export default withRouter(LoginForm)