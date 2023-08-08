import React from 'react';
import "./style/tarjeta.css"

export default function Tarjeta(tarjeta) {
  return (
    <div><div className="tarjeta">
        
    <div className="tarjeta-media">
      <img src={tarjeta.image} className="image" alt="excel" />
    </div>
    <div className="tarjeta-header">
      <a href="/product/">{tarjeta.nombre}</a>
    </div>
  </div>
  </div>
  )
}
