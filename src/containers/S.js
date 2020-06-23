import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class S extends Component {


  render() {
    
    return (
      <div>
      <Container>
        <Row className="work-row">
          <Col xs={12} lg={4} className="work-description">
             <h1>SWIFT by Renmark Marte and Caroline Cham</h1>
             <h2>UX/UI Design, Concept Design, Mobile App, Branding, Research-led design, Water Saver Technology</h2>
             <br/><br/>
             <h3>Let's save some water.</h3>
             <p>This project was developed for the 'IxDA Student Design Challenge' held in New York. 
             The competition challenged us to quickly come up with a simple, yet impactful idea that 
             involved technology and design. My partner and I came up with SWIFT, a simple app that 
             encouraged people to save water by keeping track of how much water they use while showering. 
             We had to create a 4-minute video to introduce ourselves and explain our idea.</p>
          </Col>
          <Col xs={12} md={8}>
            <div className="swift-video-container swift-video-container-16x9">
             <iframe title="swift-video" src="https://player.vimeo.com/video/195803106" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="swift-intro" src="../../imgs/swift/s_intro.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={5} lg={4} className="work-description">
             <h3>Saving the environment can be fun.</h3>
            <p>SWIFT has been designed so that saving water and energy is easy and doesn't 
            need to be a burden. SWIFT helps the user set realistic goals with their showers, 
            and helps them reduce the duration of their showers every week. It keeps track 
            of how much water and energy is saved based on how many minutes they showered 
            under their goal. As an incentive, SWIFT also has a leaderboard so that the 
            entire household can compete on who can save the most water and energy in a 
            week. Who doesn't love some friendly competition?</p>
          </Col>
          <Col xs={12} md={7} lg={8}>
            <img className="img-fluid" alt="swift-save-water" src="../../imgs/swift/s_save.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={5} lg={4} className="work-description">
             <h3>More than just a water saving app.</h3>
            <p>SWIFT is also an app that helps with your productivity. We expect most users 
            to use SWIFT in the morning before work, so we designed the app to help you get 
            the day started. The weather, daily reminders, and a music player can be easily 
            accessed through the SWIFT app.</p>
          </Col>
          <Col xs={12} md={7} lg={8}>
            <img className="img-fluid" alt="swift-save-water" src="../../imgs/swift/s_media.jpg"/>
          </Col>
        </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="S" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default S;
