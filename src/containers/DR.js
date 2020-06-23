import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class DR extends Component {


  render() {
    
    return (
      <div>
      <Container>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="doggie-rescue-header" src="../../imgs/doggie_rescue/dr_header.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={4} lg={6} className="work-description">
            <h1>Doggie Rescue by Renmark Marte and Annie Lee</h1>
            <h2>UX/UI Design, Mobile App, Branding, Research-led design</h2>
            <br/><br/>
            <h3>Find your pet soulmate.</h3>
            <p>Doggie Rescue is a project that was inspired by an animal rescue shelter of the 
            same name that does amazing work of finding new homes for neglected and abused animals. 
            We thought that their work could become more efficent with an app that walked users 
            through the process of adoption in easy and manageable steps.</p>
          </Col>    
          <Col xs={12} md={8} lg={6}>
            <img className="img-fluid" alt="doggie-rescue-intro" src="../../imgs/doggie_rescue/dr_intro.png" />
          </Col>
        </Row>
        <Row className="work-row">
        <Col xs={12}>
             <img className="img-fluid" alt="doggie-rescue-brand" src="../../imgs/doggie_rescue/dr_img1.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
            <Col xs={4} md={3}>
               <img className="img-fluid" alt="doggie-rescue-swipe" src="../../imgs/doggie_rescue/dr_swipe.gif"/>
            </Col>
            <Col xs={4} md={3}>
               <img className="img-fluid" alt="doggie-rescue-questionnaire" src="../../imgs/doggie_rescue/dr_questionnaire.jpg"/>
            </Col>
            <Col className="work-description" xs={4} md={6}>
              <h3>How can we make dog adoption easier?</h3>
              <p>Pet adoption doesn't have to be a long and convoluted process. 
              Instead of filtering through pages and pages of potential pets, 
              Doggie Rescue has adopted a 'Tinder-like' approach to make it easier 
              to find your future pet. Just answer a simple questionnaire about your 
              lifestyle, and we'll fetch a list of all the dogs you've matched with! 
              Swipe right if you're interested and Doggie Rescue will save it in your 
              'liked' list.</p>
            </Col>
          </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="doggie-rescue-mock" src="../../imgs/doggie_rescue/dr_mock.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={5} className="work-description">
            <h3>Never lose your adoption forms ever again.</h3>
            <p>We've found that the various steps involved in the adoption process 
            can be quite tedious and inconvenient for most individuals. As a result, 
            Doggie Rescue creates a fun and integrated experience that keeps track of 
            the entire adoption process in a single app. <br/><br/> You can peruse through 
            your 'liked' list at your own time and decide if you want to take it to the 
            next stage or not. This involves setting up playdates, completing the necessary 
            adoption forms, planning a trial, and adopting!</p>
          </Col>    
          <Col xs={12} md={7}>
            <img className="img-fluid" alt="doggie-rescue-adoption-process" src="../../imgs/doggie_rescue/dr_process.jpg" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="DR" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default DR;
