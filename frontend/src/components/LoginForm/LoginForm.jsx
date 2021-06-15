import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card, CardBody, CardTitle, Button, Form, FormGroup, Label
} from 'reactstrap';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div style={{fontFamily:prompt}}>
        <Card  style={{backgroundColor: 'rgb(73,73,73)', borderRadius: '38px', color: 'white'}}>
        <CardBody>
          <CardTitle style={{fontSize:'3.1em'}} tag="h3" className="text-center text-md-right">Login</CardTitle>
          <Form>
            <FormGroup>
              <Label for="username" className="form-label">Username</Label> 
              <span className="icon-align">
                <img className="person-icon" src={process.env.PUBLIC_URL + '/PersonIcon.svg'} alt="Person Icon"/>
                <input className="form-textbox" type="text" name="username" id="username" placeholder="Username or Email" />
              </span>
              </FormGroup>
            <FormGroup>
              <Label for="password" className="form-label">Password</Label>
              <span className="icon-align">
                <img className="password-icon" src={process.env.PUBLIC_URL + '/PasswordIcon.svg'} alt="Password Icon"/>
                <input className="form-textbox" type="password" name="password" id="Password" placeholder="Password" />
                <img className="visible-icon" src={process.env.PUBLIC_URL + '/VisibleIcon.svg'} alt="View Password Icon"/>
                </span>
            </FormGroup>
          </Form>
          <div style={{textAlign: 'center', padding:'7%'}}>
            <Button to="/" style={{backgroundImage: 'linear-gradient(to right, rgb(0, 148, 255), rgb(6, 164, 41))', width: '85%', borderRadius: '50px', fontSize:'1.6em'}}>Login</Button>
          </div>
          <p className="text-center" style={{fontSize:'1.3em'}}>Don't have an account?</p>
          <div className="text-center" style={{fontSize:'1.3em'}}>
            <Link className="link" to="/signup">SIGN UP</Link>
          </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default LoginForm;