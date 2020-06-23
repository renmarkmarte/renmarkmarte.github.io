import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectFooter from '../components/ProjectFooter';

class RMD extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }


  render() {

    if(this.setState.isLoading) {
      
    }
    
    return (
      <div>
      <Container>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="rmd-header" src="../imgs/reframing_male_depression/rmd_intro.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} lg={7}>
             <img className="img-fluid" alt="rmd-poster" src="../imgs/reframing_male_depression/rmd_poster_situ.jpg"/>
          </Col>
          <Col xs={12} lg={5} className="work-description">
             <h1>Reframing Male Depression</h1>
              <h2>Pubic Health Campaign, Graphic Design, Print & Digital, Research-led design, Branding, Illustration</h2>
              <br/>
              <h3>How can we reframe society's perspective on male depression?</h3>
              <p>For a majority of men, embarrassment, shame, and failure are the most common 
              emotions associated to mental health help-seeking. Some men believe that there is a 
              societal pressure for men to be ‘masculine’ which involves refraining from showing any 
              emotion and fixing problems, even your own mental issues, on your own. As a result, 
              although society is becoming a lot more open towards discussing mental health in a 
              public setting, men still feel uncomfortable or are unwilling to address their 
              depression at a personal level.<br/><br/>

              Through my Honours project, I studied the impact of using positive emotions, such as humour, 
              hope, and joy in designing public health campaigns targeting male depression. Through 
              research and experimentation, evidence exists that incorporating positivity in health 
              campaign design encourages more men to tackle their depression as it is able to reframe 
              the issue as something is approachable, normal to experience, and easy to treat. </p>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="rmd-coaster" src="../../imgs/reframing_male_depression/rmd_coasters.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="rmd-calling-card" src="../../imgs/reframing_male_depression/rmd_calling_cards.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} lg={5} className="work-description">
              <h3>Fighting depression.</h3>
              <p>A brand identity that revolved around the idea of ‘taking action’ was developed for 
              the campaign. Men were found to be more likely to respond to material that portrayed 
              depression as something that is physical and can be overcome through physical actions, 
              rather than an illness that is purely mental. Phrases that inspired action such as 
              “Fight male depression” or “Beat male depression” were used instead of “get help” or 
              “seek help” to encourage more men to deal with their illness. To complement this, a 
              graphic style was adopted into the campaign along with two superhero sidekicks featured 
              in educational and humorous graphic novels to reinforce the idea of taking action. </p>
          </Col>
          <Col xs={12} lg={7}>
             <img className="img-fluid" alt="rmd-book-covers" src="../../imgs/reframing_male_depression/rmd_books.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="rmd-imac" src="../../imgs/reframing_male_depression/rmd_imac.jpg"/>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12} className="work-description">
             <h3>Talk and learn!</h3>
             <p>Research has also found that men lacked the knowledge to properly address and discuss 
             the issue of depression. There is a misconception that the treatment for depression is 
             limited and to add to this some men even fail to identify the symptoms of the illness. 
             To address this, a website was created to serve as a hub of relevant information surrounding 
             the issue and to act as a gateway to an online community. Men can easily learn about the issue 
             and dispel common misconceptions by visting the website. Additionally, men suffering from 
             or who have suffered from depression can share their stories and converse with men that have 
             gone through similar situations through the website.</p>
          </Col>
        </Row>
        <Row className="work-row">
          <Col xs={12}>
             <img className="img-fluid" alt="rmd-wireframes" src="../../imgs/reframing_male_depression/rmd_wireframes.jpg"/>
          </Col>
        </Row>
      </Container>
      <Container fluid>
      <ProjectFooter currProject="RMD" projects={this.props.projects} featuredproject={this.props.featuredproject}/>
      </Container>
      </div>
    );
  }
}

export default RMD;
