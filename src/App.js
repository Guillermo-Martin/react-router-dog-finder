import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './containers/Home';
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
    const dogsArr = this.props.dogs.map(dog => 
      <Card 
        name={dog.name}
        age={dog.age}
        facts={dog.facts}
        src={dog.src}
      />
    );

    // render a <li> for every dog in the array and pass to Navbar
    const navLinksArr = this.props.dogs.map(dog => 
      <li>{dog.name}</li>
    );

    return (
      <div className="App">
        <Router>
          <Navbar links={navLinksArr} />
          <p>{dogsArr}</p>
        </Router>
        
     </div>
    );
  }
}

export default App;
