import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class FIO extends Component {


  render() {
    return (
      <div>
      <Container>
      <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="fio-header" src="../../imgs/fun_in_one/fio_header.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} lg={4} className="work-description">
             <h1>Fun-In-One</h1>
          <h2>UX/UI Design, Mobile App, Branding, Research-led design</h2>
          <br/><br/>
          <h3>Shop. Play. Stream.</h3>
          <p>Fun-In-One is a home entertainment system that integrates shopping, 
          playing, and streaming into a single app. The app specifically targets 
          families with young children and was developed for a University assignment 
          to teach user research, wireframing, prototyping, usability testing, and 
          design iteration. </p>
          </Col>
          <Col xs={12} lg={8}>
            <img className="img-fluid" alt="fio-intro-img" src="../../imgs/fun_in_one/fio_intro.gif" />
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="fio-wireframes" src="../../imgs/fun_in_one/fio_wireframes.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={7} lg={8}>
            <img className="img-fluid" alt="fio-mobile" src="../../imgs/fun_in_one/fio_mobile.jpg" />
          </Col>
          <Col xs={12} md={5} lg={4} className="work-description">
             <h3>Let's go mobile.</h3>
             <p>Our human research have shown that families with young children are more 
             comfortable with using mobile devices, such as tablets and mobile phones, 
             compared to a desktop computer.  As a result, we specifically designed the 
             app to be mobile device friendly, making sure buttons are big enough to press,
              navigation is clean and straightforward, and that it can be displayed in 
              different orientations.</p>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={7} lg={8}>
            <img className="img-fluid" alt="fio-stream" src="../../imgs/fun_in_one/fio_stream.jpg"/>
          </Col>
          <Col xs={12} md={5} lg={4} className="work-description">
             <h3>Stream to your entire household.</h3>
          <p>Our human research have shown that families with young children are more 
          comfortable with using mobile devices, such as tablets and mobile phones, 
          compared to a desktop computer.  As a result, we specifically designed the 
          app to be mobile device friendly, making sure buttons are big enough to press, 
          navigation is clean and straightforward, and that it can be displayed in 
          different orientations.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="FIO" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default FIO;
