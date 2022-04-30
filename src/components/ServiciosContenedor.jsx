import React from 'react'
import Servicios from './Servicios'
import '../style/ServiciosContenedor.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServiciosContenedor() {
  AOS.init()
  return (
    <nav>
    <div className='contenedor-servicios'>
      <h1 className="servicios-titulo" data-aos="zoom-in" data-aos-duration="1500">Nuestros Servicios</h1>
      <div className='fila' data-aos="zoom-out-up" data-aos-duration="1000">
        <Servicios
          imagen='service-1'
          texto='Ofrecemos opciones de relevamiento y análisis de instalación existentes, brindando las mejores alternativas económicas en el área eléctrica y automatización industrial. Todo esto con sus informes de estados y adecuación a normativa Vigente'
          titulo='Proyectos Electricos'
        />
        <Servicios
          imagen='service-2'
          texto='Diseñamos y desarrollamos cada una de las etapas de sus proyectos de ingeniería eléctrica y automatización, estudios de viabilidad, construcción de planos, memorias de calculo, cubicaciones, manuales y especificaciones técnicas, entre otros, adaptándonos asi a sus requerimiento y a las necesidades del proceso'
          titulo='Ingeniería Eléctrica'
        />
      </div>
      <div className='fila' data-aos="zoom-out-up" data-aos-duration="1500">
        <Servicios
          imagen='service-3'
          texto='Diseñamos y desarrollamos Tableros Eléctricos de acuerdo a sus necesidades, dando diversas alternativas de Control y Automatización.'
          titulo='Tableros eléctricos'
        />
        <Servicios
          imagen='service-4'
          texto='Nos hacemos cargo de todo el proceso de suministra, montar y poner en servicio los equipos eléctricos con sus canalizaciones y tendidos de conductores asociados a diversos proyectos industriales.'
          titulo='Montaje Eléctrico'
        />
      </div>
      
    </div>
    </nav>
      )
}

      export default ServiciosContenedor