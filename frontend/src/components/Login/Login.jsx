import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Login;