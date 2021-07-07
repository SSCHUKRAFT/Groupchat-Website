import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="bg">
        <Container fluid>
          <Row>
            <Col xs="2" style={{backgroundColor: '#494949', color: 'white', paddingBottom: "100%"}}>Talks</Col>
            <Col xs = "8" style={{backgroundColor: '#555555', color: 'white'}}>Settings</Col>
            <Col xs="2" style={{backgroundColor: '#494949', color: 'white'}}>Friends</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;