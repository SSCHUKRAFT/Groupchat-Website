import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Signup</h2>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Signup;