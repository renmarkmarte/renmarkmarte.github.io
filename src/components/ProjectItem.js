import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import d_projecticon from '../imgs/d_projectIcon.jpg';
import dr_projecticon from '../imgs/dr_projectIcon.jpg';
import fio_projecticon from '../imgs/fio_projectIcon.jpg';
import l_projecticon from '../imgs/l_projectIcon.jpg';
import rm_projecticon from '../imgs/rm_projectIcon.jpg';
import rmd_projecticon from '../imgs/rmd_projectIcon.jpg';
import s_projecticon from '../imgs/s_projectIcon.jpg';
import vak_projecticon from '../imgs/vak_projectIcon.jpg';

class ProjectItem extends Component {

  render() {
    var imgSrc = "";
    switch(this.props.project.id) {
      case 'D':
        imgSrc = d_projecticon;
        break;
      case 'DR':
        imgSrc = dr_projecticon;
        break;
      case 'FIO':
        imgSrc = fio_projecticon;
        break;
      case 'L':
        imgSrc = l_projecticon;
        break;
      case 'RM':
        imgSrc = rm_projecticon;
        break;
      case 'RMD':
        imgSrc = rmd_projecticon;
        break;
      case 'S':
        imgSrc = s_projecticon;
        break;
      case 'VAK':
        imgSrc = vak_projecticon;
        break;
      default:
        break;
    }
    var link = "/works/" + this.props.project.id;

    return (
        <Col className="project-icon-container" xs="12" md="4">
          <NavLink to={link}>
        	  <img className="img-fluid" alt="project-icon" src={imgSrc}/>
          </NavLink>
        </Col>
    );
  }
}

export default ProjectItem;
