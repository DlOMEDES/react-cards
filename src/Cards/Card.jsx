import React from 'react';
import './Card.css';


const Card = (props) => (
  <div className="card-container">  
    <div className="card">
      <div className="card__side card__side--front">
        <div className="eng">{props.eng}</div>
      </div>
      <div className="card__side card__side--back">
        <div className="han">{props.han}</div>
        <div className="pin">{props.pin}</div>
      </div>
    </div>
  </div>
)

export default Card