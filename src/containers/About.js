import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class About extends Component {


  render() {
    
    return (
      <Container>
        <Row className="about-container">
          <Col xs={12} lg={7}>
             <img className="img-fluid" alt="about-me" src="../imgs/about_photo.jpg" />
          </Col>
          <Col xs={12} lg={5}>
             <h1>Hello! My name is Renmark and I’m a visual designer.</h1>
             <h2>I specialise in UX/UI design, front-end web development, and graphic design.</h2><br/>
             <p>In 2018, I completed a Bachelor of Computer Science / Media Arts (Hons) at UNSW where I 
             studied a wide array of subjects including UX/UI design, branding, experimental typography and 
             wayfinding systems, as well as algorithm design, artificial intelligence and software construction. 
             On top of my studies, I've also completed several design internships at companies such as <a href="http://www.dmg.com.au/" target="_blank" rel="noopener noreferrer">
             dmg (digital media group)</a> and <a href="https://www.bedsonline.com.au/" target="_blank" rel="noopener noreferrer">
             Bedsonline</a> where I worked on various projects with real clients. I call myself a 
             ‘technical-creative’ that is well-versed in both the technical and creative aspects of computing. 
             <br/><br/>
             If I’m not busy designing a user interface in Sketch or vectorising logos in Illustrator, you will 
             most likely find me playing video games or scavenging the pantry for snacks.
             </p>
             <a href="./resume.pdf" download className="btn btn-primary" role="button">Download CV</a>
             <NavLink to="/contact"><Button color="primary">Contact</Button></NavLink>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="text-center about-skills-container">
             <h1>Software Skills</h1>
             <img className="img-fluid" alt="about-skills-adobe" src="../imgs/skills_adobe.svg"/><br/>
             <img className="img-fluid" alt="about-skills-ui" src="../imgs/skills_ui.svg"/><br/>
             <img className="img-fluid" alt="about-skills-front-end" src="../imgs/skills_dev.svg"/><br/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
