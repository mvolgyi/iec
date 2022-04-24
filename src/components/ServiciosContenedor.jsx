import React from 'react'
import Servicios from './Servicios'
import '../style/ServiciosContenedor.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServiciosContenedor() {
  AOS.init()
  return (
    <div>
      <h1 className="servicios-titulo" data-aos="zoom-in" data-aos-duration="1500">Nuestros Servicios</h1>
      <div className='fila' data-aos="zoom-out-up" data-aos-duration="1000">
        <Servicios
          imagen='service-1'
          texto='ufff un monton de cosas y servicios que hacen, re loco el chabon'
          titulo='Proyectos Electricos'
        />
        <Servicios
          imagen='service-1'
          texto='ufff un monton de cosas y servicios que hacen, re loco el chabon'
          titulo='Proyectos Electricos'
        />
      </div>
      <div className='fila' data-aos="zoom-out-up" data-aos-duration="1500">
        <Servicios
          imagen='service-1'
          texto='ufff un monton de cosas y servicios que hacen, re loco el chabon'
          titulo='Proyectos Electricos'
        />
        <Servicios
          imagen='service-1'
          texto='ufff un monton de cosas y servicios que hacen, re loco el chabon'
          titulo='Proyectos Electricos'
        />
      </div>
      
    </div>
      )
}

      export default ServiciosContenedor