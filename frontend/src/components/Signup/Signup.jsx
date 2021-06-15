import React, { Component } from "react";
import SignupForm from "../SignupForm/SignupForm";
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="signup-bg">
        <div className="signup-box-container">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default Signup;