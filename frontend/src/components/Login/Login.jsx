import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm";
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-bg">
        <img className="logo" src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Smalltalk Logo"/> 
        <div className="login-box-container">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;