import React from 'react'
import '../style/Proyectos.css'

function Proyectos({ imagen, titulo, texto, texto2, texto3}) {
  return (

    <div className="flip-box">
      <div className="flip-box-inner" >
        <div className="flip-box-front">
          <img src={require(`../assets/${imagen}.jpg`)} alt="Proyectos" />
        </div>
        <div className="flip-box-back">
          <div className='flip-box-texto'>
            <h2>{titulo}</h2>
            <ul>           
              <li>{texto}</li>
              <li>{texto2}</li>
              <li>{texto3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos