import React from 'react';
import Proyectos from './Proyectos';
import '../style/ProyectosContenedor.css';

function ProyectosContenedor() {
  return (
    <nav className='proyectowrap'>
    <div className='proyectos-contenedor'>
      <h1 className='proyectos-titulo'>Algunos de Nuestros Proyectos</h1>
      <div className='fila'>
      <Proyectos 
      imagen='ford'
      titulo='Ford Pacheco 2020'
      texto='Instalacion luminarias led'
      texto2='y Tablero seccionador para nuevo kitting de ford Ranger'
      texto3=''

      />
        <Proyectos 
      imagen='ford2'
      titulo='Ford Pacheco 2020'
      texto='Instalacion de luminarias de columnas exteriores de iluminacion'
      texto2='del dock de carga de planta montaje'
      texto3=''

      />

    
      </div>
    </div>
    </nav>
  )
}

export default ProyectosContenedor