import React, { Component } from 'react'
import {ChatForm} from './Components/ChatForm'
import {connect} from 'react-redux'
// import './styles/chatstyles.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import LoginRegister from './Components/LoginRegister'
import AddRoom from './Components/AddRoom'

class App extends Component {
  render() {
    return (
    <Router>
    	<div>

    		<Route exact path="/" component={Home} />
    		<Route path="/signin" component={LoginRegister} />
    		<Route path="/addroom" component={AddRoom} />

    	</div>
    </Router>
  )}
}


export default App
