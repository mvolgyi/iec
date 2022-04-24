import React from 'react';
import ValoresInd from './ValoresInd';
import '../style/ValoresContenedor.css';

function ValoresContenedor() {
  return (
    <div className="contenedor-valores">
      <ValoresInd 
      titulo='PROFESIONALIDAD'
      texto='Contamos con profesionales especializados en proyectos de ingeniería eléctrica y automatismo industrial'
      esCasco={true}
      />
      <ValoresInd 
       titulo='SOLUCIONES'
       texto='Brindamos respuestas y soluciones en todo tipo de proyectos electricos'
       esLamparita={true}
       />
      <ValoresInd 
       titulo='SEGURIDAD'
       texto='Nuestros servicios apuntan al uso eficiente y seguro de la energía'
       imagen='faHelmetSafety'
       />
    </div>
  )
}

export default ValoresContenedor