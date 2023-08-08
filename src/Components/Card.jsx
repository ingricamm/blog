import "./style/card.css";
import React from "react";

function Card(card) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-media">
          <img src={card.image} className="image" alt="" />
        </div>
        <div className="card-header">
          <span>{card.nombre}</span>
        </div>
        {/* <p className="description">{card.detalle}</p> */}
      </div>
    </div>
  );
}

export default Card;
