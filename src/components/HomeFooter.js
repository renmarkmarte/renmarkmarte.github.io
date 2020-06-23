import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class HomeFooter extends Component {


  render() {
    
    return (
      <Container fluid>
        <Row>
          <Col lg={12} className="text-center contact-footer">
            <h1>Say hello!</h1>
            <Col lg={12}>
              <img className="footer-icon" alt="email-icon" src="../imgs/icons/email_icon.svg"/><span>renmark.m@gmail.com</span>
            </Col>
            <Col lg={12}>
              <img className="footer-icon" alt="linkedin-icon" src="../imgs/icons/linkedin_icon.svg"/><a href="https://www.linkedin.com/in/renmarte">linkedin.com/in/renmarte</a>
            </Col>
            <Col lg={12}>
              <img className="footer-icon" alt="behance-icon" src="../imgs/icons/behance_icon.svg"/><a href="https://www.behance.net/renmarte">behance.net/renmarte</a>
            </Col>
            <Col lg={12}>
              <img className="footer-icon" alt="instagram-icon" src="../imgs/icons/instagram_icon.svg"/><a href="https://www.instagram.com/renmarte">instagram.com/renmarte</a>
            </Col>
            <br/>
            <p>:)</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeFooter;
