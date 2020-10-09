import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {

    const allDogs = this.props.dogs;

    // for every dog in the allDogs array render and image with a name
    const dogImgs = allDogs.map(dog => 
        <div key={dog.name}>
          <Link to={`dogs/${dog.name}`}><img src={dog.src} alt={dog.name} /></Link>
          <p>{dog.name}</p>
        </div>
    );

    return (
      <div>
        <h1>This is the home page</h1>
        {dogImgs}
      </div>
    );
  }
}

export default Home;
