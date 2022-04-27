import React from 'react';
import '../style/Servicios.css';

function Servicios({ imagen, titulo, texto }) {
  return (

    <div className="servicio-item">
      <div className="servicio-img">
        <img
          src={require(`../assets/${imagen}.jpg`)}
          alt="cpsas" />
        <div className="servicio-overlay">
          <p>
            {texto}
          </p>
        </div>
      </div>
      <div className="servicio-text">
        <h3>{titulo}</h3>
        <a className="btn" href='/servicios'>+</a>
      </div>
    </div>

  )
}

export default Servicios;