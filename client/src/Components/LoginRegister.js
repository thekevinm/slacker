import React, { Component } from 'react'
import '../styles/loginresgister.css'
import {Header} from './Header'

export class LoginRegister extends Component {
  render() {
    return (
      <div>

      <Header />

	  <div className="loginnregisterContainer">

	    <div className="loginStuff">
			<form action="/login" method="post">
				<fieldset>
					<legend>Login</legend>
						<input className="loginInput" placeholder="Username" type="text" name="username" />
						<input className="loginInput" placeholder="Password" type="password" name="password" />
						<button className="loginButton" type="submit">Login</button>
				</fieldset>
			</form>
		</div>

		<div className="registerStuff">
			<form action="register" method="post" enctype="multipart/form-data">

				<fieldset>
					<legend>Register</legend>
						<input className="loginInput" placeholder="Username" type="text" name="username" />
						<input className="loginInput" placeholder="Password" type="password" name="password" />
						<input className="loginInput" placeholder="Confirm Password" type="password" name="confirmpassword" />
				
					<div className="imgStuff">	
						<h5>Upload A Profile Picture:</h5>
						<input className="imgUpload" type="file" name="listingImg" formenctype="multipart/form-data"/>
					</div>

					<button className="registerButton" type="submit">Register</button>

				</fieldset>

			</form>
			</div>
		</div>

      </div>
    )
  }
}



export default LoginRegister