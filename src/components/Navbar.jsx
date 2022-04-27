
import '../style/Navbar.css'
import { useState } from 'react'
import { animateScroll as scroll } from "react-scroll"






const Navbar = () => {


    const [openbar, setOpenbar] = useState(false)

    const aopenbar = () =>{
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
                <div className={scrollnav ? 'navbarlogo active' : 'navbarlogo'}onClick={toggleHome}>IEC</div>
                
                <div className={openbar ? 'navmenu active' : 'navmenu'}onClick={aopenbar}>
                    <div className={scrollnav ? 'navitemhome active' : 'navitemhome'} onClick={toggleHome}>
                        <div className={scrollnav ? 'nav-links active' : 'nav-links'} >
                            Home
                        </div>
                    </div>
                    <div className="navitem">
                        <div className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Nosotros
                        </div>
                    </div>
                    <div className="navitem">
                        <div className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Servicios
                        </div>
                    </div>
                    <div className="navitem">
                        <div className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Proyectos
                        </div>
                    </div>
                    <div className="navitem">
                        <div className={scrollnav ? 'nav-links active' : 'nav-links'}>
                            Contacto
                        </div>
                    </div>
                </div>
                <div className='menuicon' >
                    <i className={openbar ? 'fas fa-times' : 'fas fa-bars'}onClick={aopenbar}></i>
                </div>
            </div>
        </nav>

    )
}

export default Navbar