import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class RM extends Component {


  render() {
    const paddingStyle = {
      paddingRight: 0
    }
    
    return (
      <div>
      <Container>
        <Row className="work-row">
          <Col xs={12} md={4} className="work-description">
             <h1>Renmark Marte</h1>
              <h2>Branding, Graphic Design</h2>
              <br/><br/>
              <h3>Let the work speak for itself.</h3>
              <p>When creating my portfolio, I knew I wanted to let the work speak for 
              itself. I didn't want anything to detract from the work and I wanted it 
              to shine by itself. And to facilitate this, a minimalistic, monochromatic, 
              and geometric brand was created.</p>
          </Col>
          <Col xs={12} md={8}>
            <img className ="img-fluid" alt="renmark-logo" src="../../imgs/self_branding/sb_logo.jpg" />
          </Col>
        </Row>
        <Row className="work-row">
          <Col style={paddingStyle}>
             <img style={paddingStyle} alt="renmark-banner" className="img-fluid" src="../../imgs/self_branding/sb_banner.gif"/>
          </Col>
          <Col style={{paddingLeft: 0}}>
             <img style={{paddingLeft: 0}} className="img-fluid" alt="renmark-banner" src="../../imgs/self_branding/sb_banner.gif"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} lg={6}>
             <img className="img-fluid" alt="renmark-type" src="../../imgs/self_branding/sb_typography.jpg"/>
          </Col>
          <Col xs={12} lg={6}>
             <img className="img-fluid" alt="renmark-colour-palette" src="../../imgs/self_branding/sb_colourpalette.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="renmark-calling-card1" src="../../imgs/self_branding/sb_callingcard1.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="renmark-calling-card2" src="../../imgs/self_branding/sb_callingcard2.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} md={8}>
             <img className="img-fluid" alt="renmark-wireframe" src="../../imgs/self_branding/sb_imac.jpg"/>
          </Col>
          <Col xs={12} md={4} className="work-description">
              <h3>Simple isometry.</h3>
          <p>As a graphic designer, I've always been fascinated with isometric grids. 
          I feel like it perfectly encapsulates my style as a designer, my love for 
          video games (I (heart) isometric environments), and my computer science background.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="RM" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default RM;
