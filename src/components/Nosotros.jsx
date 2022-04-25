import { Component } from 'react';
import '../style/Nosotros.css';
import  about from '../assets/Proyectos.jpg';



class Nosotros extends Component{
    state={clicked:false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
        <div className='navwrap'>
            <div className='nosotroswrap'>
                <div className='imgwrap'>
                    <img className='nosimg' src={about} alt='Foto proyectos'/>
                    </div>
                <div className='aboutwrap'>
                    <div className='aboutheader'>Bienvenido a IEC</div>
                    <h2 className='abouttitle'>Sobre nosotros</h2>
                    <div className='abouttext'>IEC es una empresa de ingeniería eléctrica que nace de una alianza de profesionales, con el objetivo de ser una solución económica y eficiente para su proceso o proyecto industrial</div>
                    <div className='abouttext'>Brindamos soluciones integrales y puntuales en tableros eléctricos o de automatización, como en la realización de la ingeniería y montaje y construcción de proyectos.</div>
                    <div className='abouttext'>Trabajamos con dispositivos eléctricos de alta calidad y tecnología, dando garantías a nuestros productos y servicios, ofrecemos soluciones reales a sus proyectos, lo que nos convierte en una opción confiable a la hora de elegir</div>
                </div>
            </div>    
        </div>
        )
    }

} 

export default Nosotros