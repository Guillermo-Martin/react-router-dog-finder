import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Card from './containers/Card';
import whiskey from './assets/images/whiskey.jpg';
import hazel from './assets/images/hazel.jpg';
import tubby from './assets/images/tubby.jpg';

class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
    ]
  }

  

  render() {
    // =====  NAVBAR =====
    // render a <li> for every dog in the array and pass to Navbar
    // each dog name will be a <Link>
    const navLinksArr = this.props.dogs.map(dog => 
      <NavLink exact to={`/dogs/${dog.name}`} key={dog.name} activeClassName="active-link">
        <li>{dog.name}</li>
      </NavLink>
    );

    return (

      <div className="App">
        <Router>

          {/* ===== NAVBAR ===== */}
          <Navbar links={navLinksArr} />

          {/* ===== ROUTES ===== */}
          <Switch>
            {/* When "/dogs" is hit, render the Home component */}
            <Route exact path="/dogs" render={() => <Home dogs={this.props.dogs} />} />
            
            {/* When "/dogs/:name" is hit, render a Card component with all the info */}
            <Route exact path="/dogs/:name" render={(routeProps) => 
              <Card {...routeProps} dogs={this.props.dogs} />} 
            />

            {/* When '/' is hit, redirect to '/dogs' */}
            <Redirect to="/dogs" />
          </Switch>
        
        </Router>
     </div>
    );
  }
}

export default App;
