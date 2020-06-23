import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';
import FeaturedProject from '../components/FeaturedProject';
import arrayShuffle from 'array-shuffle';
import { Col, Container, Row, FormGroup, Input } from 'reactstrap';
import HomeFooter from './HomeFooter';

class Projects extends Component {

  handleChange(e) {
  	this.props.searchProject(e.target.value);
  }


  render() {
	  if(this.props.projects) {
	  	var shuffledProjects = arrayShuffle(this.props.projects);
	  	var projectItems = shuffledProjects.map(project => {
	  		if(this.props.category === "All projects" || project.category.includes(this.props.category)) {
	  			return (
	  			<ProjectItem key={project.id} project={project}/>
	  			);
	  		} else {
          return null;
        }
	  		
	  	});
	  }
    
    return (
    <div>
      <Container>
  	  <FeaturedProject featuredproject={this.props.featuredproject}/>
  	  <FormGroup row>
         <span>Filter:</span>
  	     <Col md={4}>
  	     <Input bsSize="sm" name="categories" type="select" placeholder="Select filter" value={this.props.category} onChange={this.handleChange.bind(this)}>
			      <option value="All projects">All projects</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Branding">Branding</option>
            <option value="Magazine">Magazine</option>
            <option value="Typography">Typography</option>
            <option value="Illustration">Illustration</option>
  	     </Input>
  	     </Col>
  	  </FormGroup>
      <Row className="project-container">
      	{projectItems}
      </Row>
      </Container>
      <HomeFooter/>
    </div>
    );
  }
}

export default Projects;
