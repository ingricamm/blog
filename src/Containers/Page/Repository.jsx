import React from "react";
import "../Components/style/grid-style.css";

function Repository() {
  return (
    <div>
      <div className="wrapper">
        <div className="home-hero">
          <div className="feature">
            <h3>Ecuaciones diferenciales</h3>
            <p>Encuentra el metodo númerico correcto para resolver tus ecuaciones diferenciales</p>
          </div>
          <div className="special">
            <h3>Python</h3>
            <p>Ciencia de datos </p>
          </div>
          <div className="amazing">
            <h3>Power BI</h3>
            <p>Visualizador  para el análisis datos</p>
          </div>
          <div className="news">
            <h3>Excel</h3>
            <p>Hot air balloons. A bit weather sensitive. </p>
          </div>
          <div className="photos">
            <h3>Otros programas para análisis</h3>
            <p>Minitab - R</p>
          </div>
          <div className="cta">
          <p>Contactame para mas información </p>
          <a className="spam-button" href="/contact">
            Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repository;
