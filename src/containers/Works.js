import React, { Component } from 'react';
import Projects from '../components/Projects';


class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredproject: {},
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      category: "All projects",
      featuredproject: {
          title: 'Reframing Male Depression',
          category: ['Branding'],
          id: 'RMD'
      },
      projects: [
        {
          title: 'Renmark Marte',
          category: ['Branding'],
          id: 'RM'
        },
        {
          title: 'Doggie Rescue',
          category: ['UX/UI'],
          id: 'DR'
        },
        {
          title: 'Swift',
          category: ['UX/UI'],
          id: 'S'
        },
        {
          title: 'Fun-In-One',
          category: ['UX/UI'],
          id: 'FIO'
        },
        {
          title: 'Logofolio',
          category: ['Branding'],
          id: 'L'
        },
        {
          title: 'Drift',
          category: ['Magazine', 'Typography'],
          id: 'D'
        },
        {
          title: 'Visualising the Anthropocene Kitchen',
          category: ['Illustration'],
          id: 'VAK'
        }
      ]
    });
  }

  searchProject(chosenCategory) {
    this.setState({category: chosenCategory});
  }

  render() {

    return (
      <div>
         <Projects {...this.state} searchProject={this.searchProject.bind(this)} />
         
      </div>
    );
  }
}

export default Works;
