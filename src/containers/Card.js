import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Card extends Component {

  // goBack function
  goBack = () => {
    this.props.history.goBack();
  }

  render() {

    // get dogName from URL
    let dogName = this.props.match.params.name;

    // create array with all dog names
    let allDogNames = this.props.dogs.map(dog => dog.name);

    // get the data of the particular dog that was clicked on
    const [dogData] = this.props.dogs.filter(dog => dog.name === dogName);

    return (
      // conditional render:  if the dogName in the url is found in the allDogNames array
      // render the card of that dog, otherwise, redirect to the homepage
      <div>
        {
          // condition:  if the dog's name isn't found in the array...
          allDogNames.indexOf(dogName) !== -1

            // render card if the dog is in the array
            ?

            <div className="container Card-container">
              <div className="card" style={{ width: "35rem" }}>

                {/* ===== IMAGE ===== */}
                <img src={dogData.src} className="card-img-top" alt={dogData.name} />

                {/* ===== INFO ===== */}
                <div className="card-body">
                  <h5 className="card-title">{dogData.name}</h5>
                  <p className="card-text">Age: {dogData.age}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{dogData.facts[0]}</li>
                  <li className="list-group-item">{dogData.facts[1]}</li>
                  <li className="list-group-item">{dogData.facts[2]}</li>
                </ul>
                <div className="card-body">
                  <button type="button" className="btn btn-primary" onClick={this.goBack}>Go Back</button>
                </div>
              </div>
            </div>


            // redirect if the dog isn't found in the array
            :
            <Redirect to="/" />
        }
      </div>
    );
  }
}

export default Card;
