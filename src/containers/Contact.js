import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {


  render() {
    
    return (
      <Container>
        <Row className="contact-container">
          <Col xs={12} lg={3}>
             <h1>Say hello!</h1>
             <h2>For business enquiries, feel free to drop a message at the e-mail address provided. 
             Thank you!</h2>
          </Col>
          <Col xs={12} lg={9}>
            <div className="contact-item">
              <img className="footer-icon" alt="email-icon" src="../imgs/icons/email_icon_black.svg"/><span>renmark.m@gmail.com</span>
            </div>
            <div className="contact-item">
              <img className="footer-icon" alt="linkedin-icon" src="../imgs/icons/linkedin_icon_black.svg"/><a href="https://www.linkedin.com/in/renmarte">linkedin.com/in/renmarte</a>
            </div>
            <div className="contact-item">
              <img className="footer-icon" alt="behance-icon" src="../imgs/icons/behance_icon_black.svg"/><a href="https://www.behance.net/renmarte">behance.net/renmarte</a>
            </div>
            <div className="contact-item">
              <img className="footer-icon" alt="instagram-icon" src="../imgs/icons/instagram_icon_black.svg"/><a href="https://www.instagram.com/renmarte">instagram.com/renmarte</a>
            </div>
            <div>
             <br/>
             <a href="./resume.pdf" target="_blank" className="btn btn-primary" role="button" rel="noopener noreferrer">Download CV</a>
            </div>
        <br/>
        <p>:)</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
