import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card, CardBody, CardTitle, Button, Form, FormGroup, Label
} from 'reactstrap';
import './SignupForm.css';

class SignupForm extends Component {
  render() {
    return (
      <div style={{fontFamily:prompt, paddingTop: '13%'}}>
        <Card  style={{backgroundColor: 'rgb(73,73,73)', borderRadius: '38px', color: 'white'}}>
        <CardBody>
          <CardTitle style={{fontSize:'3.1em'}} tag="h3" className="text-center text-md-right">Signup</CardTitle>
          <Form>
            <FormGroup>
              <Label for="username" className="form-label">First Name</Label> 
              <span className="icon-align">
                <img className="person-icon" src={process.env.PUBLIC_URL + '/PersonIcon.svg'} alt="Person Icon"/>
                <input className="form-textbox" type="text" name="username" id="username" placeholder="First Name" />
              </span>
            </FormGroup>
            <FormGroup>
              <Label for="username" className="form-label">Last Name</Label> 
              <span className="icon-align">
                <img className="person-icon" src={process.env.PUBLIC_URL + '/PersonIcon.svg'} alt="Person Icon"/>
                <input className="form-textbox" type="text" name="username" id="username" placeholder="Last Name" />
              </span>
            </FormGroup>
            <FormGroup>
              <Label for="username" className="form-label">Email</Label> 
              <span className="icon-align">
                <img className="email-icon" src={process.env.PUBLIC_URL + '/Email-Icon.svg'} alt="Email Icon"/>
                <input className="form-textbox" type="text" name="username" id="username" placeholder="Email" />
              </span>
            </FormGroup>
            <FormGroup>
              <Label for="username" className="form-label">Username</Label> 
              <span className="icon-align">
                <img className="person-icon" src={process.env.PUBLIC_URL + '/PersonIcon.svg'} alt="Person Icon"/>
                <input className="form-textbox" type="text" name="username" id="username" placeholder="Username" />
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
            <Button style={{backgroundImage: 'linear-gradient(to right, rgb(0, 148, 255), rgb(6, 164, 41))', width: '85%', borderRadius: '50px', fontSize:'1.6em'}}>Signup</Button>
          </div>
          <p className="text-center" style={{fontSize:'1.3em'}}>Have an account?</p>
          <div className="text-center" style={{fontSize:'1.3em'}}>
            <Link className="link" to="/login">SIGN IN</Link>
          </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default SignupForm;