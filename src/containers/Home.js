import React, { Component } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

class Home extends Component {

  render() {

    const allDogs = this.props.dogs;

    return (
      <div>
        <h1>This is the home page</h1>
      </div>
    );
  }
}

export default Home;


// create an array and pass it down to home