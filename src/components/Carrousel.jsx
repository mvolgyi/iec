import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/Carrousel.css';
import tablero from '../assets/Tablero.jpg';
import proyectos from '../assets/Proyectos.jpg';
import ingenieria from '../assets/Ingenieria.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Carrousel(){
  AOS.init()
  return (
    <div>
      <Carousel 
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage='100'
      showStatus={false}
      >
        <div>
          <img src={proyectos} alt="Imagen proyecto Eléctrico"/>
          <div className='carousel-caption'>
            <p data-aos="fade-left" data-aos-duration="1000">Asesoramiento e Inspección Técnica de </p>
            <h1 data-aos="fade-right" data-aos-duration="1500">Proyectos Eléctricos</h1>
          </div>
        </div> 
        <div>
          <img src={ingenieria} alt="Imagen Ingenieria Eléctrica"/>
          <div className='carousel-caption'>
            <p data-aos="fade-left" data-aos-duration="1000">Diseñamos y Desarrollamos proyectos de</p>
            <h1 data-aos="fade-right" data-aos-duration="1500">Ingeniería Eléctrica</h1>
          </div>
        </div> 
        <div >
          <img src={tablero} alt="Imagen Tablero Eléctrico"/>
          <div className='carousel-caption'>
            <p data-aos="fade-left" data-aos-duration="1000">Diseñamos y Desarrollamos</p>
            <h1 data-aos="fade-right" data-aos-duration="1500">Tableros Eléctricos</h1>
          </div>
        </div> 
        
      </Carousel>
    </div>
  )
}

export default Carrousel
