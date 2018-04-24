import React, { Component } from 'react'
import '../styles/loginresgister.css'
import Header from './Header'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export class LoginRegister extends Component {
  render() {
    return (
      <div>

      <Header />

	  <LoginForm />

	  <RegisterForm />

      </div>
    )
  }
}



export default LoginRegister