import React from 'react'
import Carrousel from '../components/Carrousel';
import ValoresContenedor from '../components/ValoresContenedor';
import Nosotros from '../components/Nosotros';
import ServiciosContenedor from '../components/ServiciosContenedor';
import ProyectosContenedor from '../components/ProyectosContenedor';


function home() {
  return (
    <div>
      <Carrousel />
      <ValoresContenedor />
      <Nosotros />
      <ServiciosContenedor />
      <ProyectosContenedor />
    </div>
  )
}

export default home