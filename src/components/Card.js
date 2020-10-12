import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  // get the dog name from the URL
  let dogName = props.match.params.name;


  let pathName = `/dogs/${dogName}`;


  
  // console.log(props.match.params.name);
  console.log(props)
  
  return (
      <div className="card" style={{ width: "18rem" }}>
        <Link to={pathName}>
          <img src={props.src} className="card-img-top" alt={pathName} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{dogName}</h5>
          <p className="card-text">Age: {props.age}</p>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.facts[0]}</li>
          <li className="list-group-item">{props.facts[1]}</li>
          <li className="list-group-item">{props.facts[2]}</li>
        </ul> */}
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
  );
}

export default Card;

// when this component renders, filter through all the dogs and find the matching one
// then render its card