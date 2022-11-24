import React from "react";

const Card = (props) => {
  if (props) {
    return (
      <div className="container">
        <div className="card">
          <h1 className="card__title">{props.title}</h1>
          <div className="card__description">{props.description}</div>
          <div className="card__wrapper">
            <div className="card__category">{props.category}</div>
            <div className="card__cta">
              <a href={props.link} className="card__cta-btn">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
