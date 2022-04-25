import React from 'react'
import { Component } from 'react';
import {menuItems} from './Menuitems'
import '../style/Navbar.css'



class Navbar extends Component{
    state={clicked:false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='navcontainer'>  
            <div className='navbaritems'>
                <h1 className='navbar-logo'>IEC</h1>
                <div className='menu-icon' onClick={this.handleClick} >
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {menuItems.map((item,index)=> {
                        return(
                            <div key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>
            </nav>
        )
    }

} 

export default Navbar