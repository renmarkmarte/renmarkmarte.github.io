import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class D extends Component {


  render() {
    return (
      <div>
      <Container>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h1>Drift</h1>
          <h2>Graphic Design, Print Design, Branding, Experimental typography, Layout design</h2>
          <p>At University, I was given the task of designing my own experimental 
          typeface. I was then challenged to use my newly created typeface in a 
          magazine revolving around a topic of our choice. We were critiqued on 
          our use of layout, typography, and space.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="drift-intro" src="../../imgs/drift/d_intro.jpg" />
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={4} className="work-description">
           <h3>Designing For Print.</h3>
          <p>With 'Drift', I decided to play around with the concept of 
          a photography magazine. Instead of presenting photographs in a 
          conventional way, I wanted to play around with shape, form, and 
          layout. Graphic objects and text are presented as a synthesised unit, 
          rather than separate entities. 'Drift' celebrates the photographs, but 
          the photographs also interact with the other elements on the page.</p>
        </Col>
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="drift-spread" src="../../imgs/drift/d_spread1.jpg" />
        </Col>
      </Row>
      <Row className="work-row">
        <Col xs={12} lg={8}>
          <img className="img-fluid" alt="drift-typography" src="../../imgs/drift/d_type.jpg" />
        </Col>
        <Col xs={12} lg={4} className="work-description">
           <h3>POINTS typeface</h3>
          <p>POINTS is a clean, geometric, and modern typeface that was 
          created using an isometric grid. As a 3D modeller, graphic designer, 
          and computer scientist, I wanted to show off my diverse practice by 
          conceptualising it as a typeface.</p>
        </Col>
      </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="D" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default D;
