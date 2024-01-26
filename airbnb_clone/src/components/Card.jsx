import React from "react";

function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 ? (
        <div className="card--badge">SOLD OUT</div>
      ) : (
        <div className="card--badge"> {`${props.location}`} </div>
      )}
      <img
        src="./../../images/michaelPhelps.jpg"
        alt="card-img1"
        className="card--image"
      />
      <div className="card--stats">
        <img
          src="./../../images/star.png"
          alt="star image"
          className="card--star"
        />
        <span className="gray">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) ~ </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <strong>From ${props.price}</strong>/ person
      </p>
    </div>
  );
}

export default Card;
