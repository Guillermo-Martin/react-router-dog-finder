import React, { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        // src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        // src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        // src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  
  render() {
    // render a card for each dog in the array
    const dogsArr = this.props.dogs.map(dog => 
      <Card 
        name={dog.name}
        age={dog.age}
        facts={dog.facts}
      />
    );

    return(
      <div>
      <p>{dogsArr}</p>
    </div>
    )
  }
}

export default Home;
