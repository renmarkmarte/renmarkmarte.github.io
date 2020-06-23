import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class ProjectFooter extends Component {


  render() {

    var footerItems = this.props.projects.map(project => {
        if(this.props.currProject !== project.id) {
          var photoLink =  "../imgs/" + project.id + "_projectIcon.jpg";
          var projectID = project.id;
          return (
           <div className="flex-item">
            <NavLink to={projectID}><img className="img-fluid" alt="footer-project-icon" src={photoLink}/></NavLink>
           </div>
          );
        } else {
          return null;
        }
        
      });
    
    return (
      <Container fluid className="footer-row">
      <Row>
        <Col className="text-center" xs={12}>
           <h1>Check out my other work:</h1>
        </Col>
      </Row>
      <div className="flex-footer-container">
      {footerItems}
      </div>
      </Container>
    );
  }
}

export default ProjectFooter;
