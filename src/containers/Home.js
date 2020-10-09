import React, { Component } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

class Home extends Component {

  render() {

    const allDogs = this.props.dogs;

    // for every dog in the allDogs array render and image with a name
    const dogImgs = allDogs.map(dog => 
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <p>{dog.name}</p>
        </div>
      )

    return (
      <div>
        <h1>This is the home page</h1>
        {dogImgs}
      </div>
    );
  }
}

export default Home;


// create an array and pass it down to home