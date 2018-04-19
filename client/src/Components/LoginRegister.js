import React, { Component } from 'react'
import '../styles/loginregister.css'

export class LoginRegister extends Component {
  render() {
    return (
      <div>

	    <div class="loginStuff">
			<form action="/login" method="post">
				<fieldset>
					<legend>Login</legend>
						<input placeholder="username" type="text" name="username" />
						<input placeholder="password" type="password" name="password" />
						<button type="submit">Login</button>
				</fieldset>
			</form>
		</div>

		<div class="registerStuff">
			<form action="register" method="post" enctype="multipart/form-data">

				<fieldset>
					<legend>Register</legend>
						<input placeholder="username" type="text" name="username" />
						<input placeholder="password" type="password" name="password" />
						<input placeholder="confirm password" type="password" name="confirmpassword" />
				
					<div class="imgStuff">	
						<h3>Upload A Profile Picture</h3>
						<input type="file" name="listingImg" formenctype="multipart/form-data"/>
					</div>

					<button type="submit">Register</button>

				</fieldset>

			</form>
		</div>

      </div>
    )
  }
}



export default LoginRegister