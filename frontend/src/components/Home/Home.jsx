import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './img/logo.svg';
import Dashboard from '../websocketDashTest/socketDashboard';


class Home extends Component {

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/login">
          Login
        </Link>
        <Dashboard/>
        </header>
    );
  }
}

export default Home;