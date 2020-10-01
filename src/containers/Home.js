import React, { Component } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

class Home extends Component {

  render() {
    // render a card for each dog in the array
    const dogsArr = this.props.dogs.map(dog =>
      <Card
        name={dog.name}
        age={dog.age}
        facts={dog.facts}
      />
    );

    // render a <li> for every dog in the array and pass to Navbar
    const navLinksArr = this.props.dogs.map(dog =>
      <li>{dog.name}</li>
    )

    return (
      <div>
        <Navbar
          links={navLinksArr}
        />
        <p>{dogsArr}</p>
      </div>
    )
  }
}

export default Home;
