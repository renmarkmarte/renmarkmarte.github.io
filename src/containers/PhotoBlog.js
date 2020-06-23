import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class PhotoBlog extends Component {


  render() {
    
    return (
      <Container>
        <Row className="contact-container">
          <Col xs={12} className="text-center">
             <h1>Content coming soon!</h1>
             <h2>In the meantime, check out my <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/renmarte">insta</a> :)</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PhotoBlog;
