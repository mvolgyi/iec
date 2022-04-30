import React from 'react';
import ValoresInd from './ValoresInd';
import '../style/ValoresContenedor.css';

function ValoresContenedor() {
  return (
    <div className="contenedor-valores">
      <ValoresInd 
      titulo='PROFESIONALIDAD'
      texto='Contamos con profesionales especializados'
      icono='fa-helmet-safety'
      />
      <ValoresInd 
       titulo='SOLUCIONES'
       texto='Brindamos respuestas y soluciones en todo tipo de proyectos electricos'
       esCentral={true}
       icono='fa-lightbulb'
       />
      <ValoresInd 
       titulo='SEGURIDAD'
       texto='Nuestros servicios apuntan al uso eficiente y seguro de la energía'
       icono='fa-wrench'
       />
    </div>
  )
}

export default ValoresContenedor