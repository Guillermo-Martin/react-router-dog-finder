import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  let pathName = `/${props.name}`;
  
  return (
    <Link to={pathName}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Age: {props.age}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.facts[0]}</li>
          <li className="list-group-item">{props.facts[1]}</li>
          <li className="list-group-item">{props.facts[2]}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </Link>

  );
}

export default Card;