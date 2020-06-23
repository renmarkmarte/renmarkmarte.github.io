import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class VAK extends Component {


  render() {
    return (
      <div>
      <Container>
      <Row className="work-row" >
        <Col xs={12} className="work-description">
           <h1>Visualising the Anthropocene Kitchen</h1>
          <h2>Graphic Design, Graphic Novel, Print Design</h2>
          <p>This graphic novel endeavours to communicate the environmental ramifications 
          of phosphate mining through the use of illustrative storytelling. This was 
          shortlisted for a graphic novel competition with Humboldt University in Berlin. </p>
        </Col>
      </Row>
      <Row className="work-row" >
        <Col xs={12} className="text-center">
          <img className ="img-fluid" alt="vak-cover" src="../../imgs/kitchen/k_1.jpg"/>
          <img className ="img-fluid" alt="vak-spread-1" src="../../imgs/kitchen/k_2.jpg"/>
          <img className ="img-fluid" alt="vak-spread-2" src="../../imgs/kitchen/k_3.jpg"/>
        </Col>
      </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="VAK" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default VAK;
