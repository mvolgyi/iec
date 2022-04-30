import React from 'react'
import '../style/Proyectos.css'

function Proyectos({ imagen, titulo, texto}) {
  return (

    <div className="flip-box">
      <div className="flip-box-inner" >
        <div className="flip-box-front">
          <img src={require(`../assets/${imagen}.jpg`)} alt="Proyectos" />
        </div>
        <div className="flip-box-back">
          <div className='flip-box-texto'>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos