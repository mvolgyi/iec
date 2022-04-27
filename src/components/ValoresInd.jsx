import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHelmetSafety, faWrench } from '@fortawesome/free-solid-svg-icons'
import '../style/ValoresInd.css';

function ValoresInd(props) {
  return (
    <div className={`valor-item ${props.esLamparita? "fondo-item-secundario" : "fondo-item-primario"}`}>
      <FontAwesomeIcon className='valor-icono' icon={props.esCasco ? faHelmetSafety: props.esLamparita?faLightbulb: faWrench} size="4x" color={`#${props.esLamparita? "092348":"b0daf2"}`} />
      <div className='valor-texto'>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
      </div>
    </div>
  )
}

export default ValoresInd