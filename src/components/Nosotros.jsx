import '../style/Nosotros.css';
import about from '../assets/Proyectos.jpg';



const Nosotros = () => {
    return (
        <nav className='navwrap'>
            <h1 className='aboutheader'>Instalaciones Eléctricas Correa</h1>
            <div className='nosotroswrap'>
                <div className='imgwrap'>
                    <img className='nosimg' src={about} alt='Foto proyectos' />
                </div>
                <div className='aboutwrap'>
                    <a className='abouttext'>IEC es una empresa de ingeniería eléctrica que nace de una alianza de profesionales, con el objetivo de ser una solución económica y eficiente para su proceso o proyecto industrial</a>
                    <a className='abouttext'>Brindamos soluciones integrales y puntuales en tableros eléctricos o de automatización, como en la realización de la ingeniería y montaje y construcción de proyectos.</a>
                    <a className='abouttext'>Trabajamos con dispositivos eléctricos de alta calidad y tecnología, dando garantías a nuestros productos y servicios, ofrecemos soluciones reales a sus proyectos, lo que nos convierte en una opción confiable a la hora de elegir</a>
                </div>
            </div>
        </nav>
    )
}


export default Nosotros