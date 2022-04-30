import '../style/Footer.css'
import { Link } from 'react-router-dom';



const Footer = () => {

        return (
            <nav className='footercontainer'>
                <div className='footerbox'>
                    <div className='infowrap'>
                    <div className='datawrapn'>
                        <Link to="/nosotros" className='ftext'>
                            Nosotros
                        </Link>
                    </div>
                    <div className='datawrap '>
                        <Link to='/servicios' className='ftext'>
                            Servicios
                        </Link>
                    </div>
                    <div className='datawrap'>
                        <Link to='/servicios' className='ftext'>
                            Proyectos
                        </Link>
                    </div>
                    <div className='datawrap'>
                        <Link to='/contacto' className='ftext'>
                            Contacto
                        </Link>
                    </div>
                    </div>
                    <div className='contactwrap'>
                        <h2 className='ctitulo'>Contacto</h2>
                        <div className='datacwrap'>
                        <i className="fa-solid fa-phone-flip"></i>
                            <p className='fctext'>+054 11 5758-2365</p>
                        </div>
                        <div className='datacwrap'>
                        <i className="fa-solid fa-envelope-open-text"></i>
                            <p className='fctext'>carlos.correa0470@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className='copyfooter'>
                    <p className='ctext'>© Instalaciones Eléctricas Correa. {new Date().getFullYear()} Todos los derechos reservados.</p>

                </div>
            </nav>
        )
    }



export default Footer