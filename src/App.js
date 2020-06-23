import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';
import EasySheetCalculator from './containers/EasySheetCalculator.js';
import Works from './containers/Works';
import Nav from './components/Nav';
import About from'./containers/About';
import Contact from'./containers/Contact';
import PhotoBlog from'./containers/PhotoBlog';
import RMD from './containers/RMD';
import RM from './containers/RM';
import DR from './containers/DR';
import S from './containers/S';
import FIO from './containers/FIO';
import L from './containers/L';
import D from './containers/D';
import VAK from './containers/VAK';


class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredproject: {},
      projects: [],
      category: ""
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
      <BrowserRouter>
        <div>
          <Nav/>

              <Route exact path="/renmarte" component={Works}/>
              <Route exact path="/renmarte/works" component={Works}/>
              <Route exact path="/renmarte/about" component={About}/>
              <Route exact path="/renmarte/contact" component={Contact}/>
              <Route exact path="/renmarte/easysheetcalculator" component={EasySheetCalculator}/>
              <Route exact path="renmarte/photo_blog" component={PhotoBlog}/>
              <Route exact path="/works/RMD" render={ props => <RMD {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/RM" render={ props => <RM {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/DR" render={ props => <DR {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/S" render={ props => <S {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/FIO" render={ props => <FIO {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/L" render={ props => <L {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/D" render={ props => <D {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
              <Route exact path="/works/VAK" render={ props => <VAK {...props} projects={this.state.projects} featuredproject={this.state.featuredproject}/>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
