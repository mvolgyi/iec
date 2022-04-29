import '../style/Navbar.css'
import { useState } from 'react'
import { animateScroll as scroll } from "react-scroll"
import { Link } from 'react-router-dom';






const Navbarnew = () => {


    const [openbar, setOpenbar] = useState(false)

    const aopenbar = () => {
        if (openbar) {
            setOpenbar(false)
        } else {
            setOpenbar(true)
        }

    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const [scrollnav, setNavbar] = useState(false)


    const chngBackground = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', chngBackground)

    return (

        <nav className='navcontainer'>

            <div className={scrollnav ? 'navbaritems active' : 'navbaritems'}>
                <div className={scrollnav ? 'navbarlogo active' : 'navbarlogo'} onClick={toggleHome}>IEC</div>

                <div className={openbar ? 'navmenu active' : 'navmenu'} onClick={aopenbar}>
                    <div className={scrollnav ? 'navitemhome active' : 'navitem'} onClick={toggleHome}>
                        <Link to="/" className={scrollnav ? 'nav-links active' : 'nav-links'} >
                            Home
                        </Link>
                    </div>
                    <div className={scrollnav ? 'navitem active' : 'navitem'}>
                        <Link to="/nosotros" className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Nosotros
                        </Link>
                    </div>
                    <div className={scrollnav ? 'navitem active' : 'navitem'}>
                        <Link to="/servicios" className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Servicios
                        </Link>
                    </div>
                    <div className={scrollnav ? 'navitem active' : 'navitem'}>
                        <Link to="/contacto" className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Contacto
                        </Link>
                    </div>
                </div>
                <div className='menuicon' >
                    <i className={openbar ? 'fas fa-times' : 'fas fa-bars'} onClick={aopenbar}></i>
                </div>
            </div>
        </nav>

    )
}

export default Navbarnew