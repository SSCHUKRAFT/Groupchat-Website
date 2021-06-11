import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm";

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginBg">
        <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Smalltalk Logo"/> 
        <div className="test">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;