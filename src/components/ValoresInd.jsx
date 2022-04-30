import React from 'react';
import '../style/ValoresInd.css';

function ValoresInd({esCentral, icono, titulo, texto}) {
  return (
    <div className={`valor-item ${esCentral? "fondo-item-secundario" : "fondo-item-primario"}`}>
      <i className={`valor-icono fa-solid ${icono}`}></i> 
      <div className='valor-texto'>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </div>
  )
}

export default ValoresInd