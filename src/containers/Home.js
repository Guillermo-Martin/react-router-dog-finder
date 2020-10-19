import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {

    const allDogs = this.props.dogs;

    // for every dog in the allDogs array render and image with a name
    const dogImgs = allDogs.map(dog => 
        <div key={dog.name}>
          <Link to={`dogs/${dog.name}`}><img src={dog.src} alt={dog.name} className="Home-img" /></Link>
          <p className="Home-dogName">{dog.name}</p>
        </div>
    );

    return (
      <div>
        <h1>Click on a dog!</h1>
        <div className="container Home-container">
          <div className="row Home-row">
            {dogImgs}
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Home;
