import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  // get the dog name from the URL
  let dogName = props.match.params.name;

  let pathName = `/dogs/${dogName}`;

  // filter through the dogs array (props.dogs) for a particular dog
  // for every dog, if dog.name equals dogName, put it in 'dogData'
  // dogData has all of that dog's info
  const [dogData] = props.dogs.filter(dog => dog.name === dogName);

  console.log(dogData);
  
  return (
      <div className="card" style={{ width: "18rem" }}>
        <Link to={pathName}>
          <img src={dogData.src} className="card-img-top" alt={dogData.name} />
        </Link>
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
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
  );
}

export default Card;