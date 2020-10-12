import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Card from './components/Card';
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

    // render a card for each dog in the array
    // const dogsArr = this.props.dogs.map(dog => 
    //   <Card 
    //     name={dog.name}
    //     age={dog.age}
    //     facts={dog.facts}
    //     src={dog.src}
    //   />
    // );

    // render a <li> for every dog in the array and pass to Navbar
    // each dog name will be a <Link>
    const navLinksArr = this.props.dogs.map(dog => 
      <Link to={dog.name} key={dog.name}>
        <li>{dog.name}</li>
      </Link>
    );

    return (
      <div className="App">
        <Router>
          <Navbar links={navLinksArr} />
          

          {/* When "/" is hit, render the Home component */}
          <Route exact path="/" render={() => <Home dogs={this.props.dogs} />} />

          {/* When "/dogs/:name" is hit, render a Card component with all the info */}
          <Route exact path="/dogs/:name" render={(routeProps) => 
            <Card {...routeProps} dogs={this.props.dogs} />} 
          />
          


          {/* <p>{dogsArr}</p> */}
        </Router>
        
     </div>
    );
  }
}

export default App;

// for each route, render a card with all the info!
// route path will be /dog/:name
// when you go to that path, render a component with props passed in