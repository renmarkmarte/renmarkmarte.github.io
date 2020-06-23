import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import featured_project from '../imgs/rmd_featuredProjectIcon.jpg';

class FeaturedProject extends Component {

  render() {
    return (      
      <div className="project-featured-container">
      <Row>
          <Col xs="12" lg="8">
            <NavLink to="/works/rmd"><img className="img-fluid" alt="featured-project-icon" src={featured_project}/></NavLink>
          </Col>
          <Col xs="12" lg="4">
            <h1>REFRAMING MALE DEPRESSION</h1>
            <h2>Pubic Health Campaign, Graphic Design, Print & Digital, Research-led design, Branding, Illustration</h2><br/>
            <p>As part of my Honours study, I looked at the effects of positive emotions, such as humour, 
            joy, and hope, in designing male depression health campaigns. For a majority of men, 
            embarrassment, shame, and failure are the most common emotions associated to 
            seeking help for depression. Through research and experimentation, I wanted to 
            seek an effective design approach that hopefully encourages more men to not only 
            seek help for their depression but to also convince individuals that help-seeking 
            isn't something that you should be ashamed of.</p>
            <NavLink to="/works/rmd"><Button color="primary">View</Button></NavLink>
          </Col>
      </Row>
      </div>
    );
  }
}

export default FeaturedProject;
