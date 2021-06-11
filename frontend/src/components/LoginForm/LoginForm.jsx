import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <Card  style={{backgroundColor: 'rgb(73,73,73)', borderRadius: '38px', color: 'white'}}>
        <CardBody>
          <CardTitle tag="h2" className="text-center text-md-right">Login</CardTitle>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="Type your username or email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="Password" placeholder="Type your password" />
            </FormGroup>
          </Form>
          <div style={{textAlign: 'center', padding:'7%'}}>
            <Button style={{backgroundImage: 'linear-gradient(to right, rgb(0, 148, 255), rgb(6, 164, 41))', width: '80%', borderRadius: '50px'}}>Login</Button>
          </div>
          <p className="text-center text-md-right">Don't have an account?</p>
          <div className="text-center text-md-right">
            <Link className="link" to="/signup">SIGN UP</Link>
          </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default LoginForm;