import React, {Component} from 'react'
import '../styles/loginresgister.css'
import {register} from '../actions/auth'
import {withRouter} from 'react-router-dom'

class RegisterForm extends Component {
	state = {
		username: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.props)
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

		<div className="registerStuff">


				<fieldset>
					<legend>Register</legend>
						<form onSubmit={this.handleSubmit}>
							<input className="loginInput" value={this.state.username} onChange={this.handleChange} placeholder="Username" type="text" name="username" />
							<input className="loginInput" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" name="password" />

							<button className="registerButton" type="submit">Register</button>
						</form>
				</fieldset>


		</div>

	</div>

    </div>
    )
  }
}



export default withRouter(RegisterForm)