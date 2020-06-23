import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class L extends Component {


  render() {
    return (
      <div>
      <Container>
      <Row className="work-row" >
        <Col xs={12} className="work-description">
           <h1>Logofolio</h1>
        <h2>Graphic Design, Branding, Logo Collection</h2>
        <p>This collection includes logos that I've designed for fun, entered in 
        competitions, and used in projects. </p>
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h3>SuperChecker –</h3>
          <p>a logo designed for a client during my internship at DMG. 
          <a href="http://www.superchecker.com.au">SuperChecker</a> is 
          an online tool that allows you to manage your super fund information 
          in one place. The brief required us to design a simple and clean logo 
          that revolved around the image of a sunflower.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="logo-superchecker" src="../../imgs/logofolio/l_superchecker.png" />
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h3>Vespa EVE –</h3>
          <p>designed for a mock Vespa brand identity that targets the young Australian market.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="logo-vespa-eve" src="../../imgs/logofolio/l_eve.png" />
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h3>ACCESS for Women –</h3>
          <p>designed for a coding summer school developed by UNSW Computer Science 
          and Engineering (CSE). This program aims to encourage young women to pursue 
          Computer Science as a career path.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="logo-access" src="../../imgs/logofolio/l_access.png" />
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h3>SWIFT –</h3>
          <p>designed for 'IxDA Student Design Challenge'. This logo was used 
          in the interface we developed for the competition.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="logo-swift" src="../../imgs/logofolio/l_swift.png" />
        </Col>
      </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="L" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default L;
