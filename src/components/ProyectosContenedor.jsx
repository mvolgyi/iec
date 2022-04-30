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
      texto='Instalacion luminarias led y Tablero seccionador para nuevo kitting de ford Ranger'
      

      />
        <Proyectos 
      imagen='ford2'
      titulo='Ford Pacheco 2020'
      texto='Instalacion de luminarias de columnas exteriores de iluminacion del dock de carga de planta montaje'
     

      />

    
      </div>
    </div>
    </nav>
  )
}

export default ProyectosContenedor