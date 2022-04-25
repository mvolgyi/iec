import React from 'react'
import { Component } from 'react';
import '../style/Footer.css'



class Footer extends Component {

    render() {
        return (
            <>
                <div className='footerbox'>
                    <div className='infowrap'>
                        <div className='datawrap'>
                            <i class="fa-solid fa-business-time"></i>
                            <p className='ftext'>Mon - Fri, 8:00 - 9:00</p>
                        </div>
                        <div className='datawrap'>
                        <i class="fa-solid fa-mobile-screen-button"></i>
                            <p className='ftext'>+012 345 6789</p>
                        </div>
                        <div className='datawrap'>
                        <i class="fa-solid fa-envelopes-bulk"></i>
                            <p className='ftext'>info@example.com</p>
                        </div>
                    </div>
                    <div className='contactwrap'>
                        <h2 className='ctitulo'>Office Contact</h2>
                        <div className='datacwrap'>
                        <i class="fa-regular fa-map"></i>
                            <p className='fctext'>123 Street, New York, USA</p>
                        </div>
                        <div className='datacwrap'>
                        <i class="fa-solid fa-phone-flip"></i>
                            <p className='fctext'>+012 345 67890</p>
                        </div>
                        <div className='datacwrap'>
                        <i class="fa-solid fa-envelope-open-text"></i>
                            <p className='fctext'>info@example.com</p>
                        </div>
                    </div>

                </div>
                <div className='copyfooter'>
                    <p className='ftext'>© IEC All Right Reserved.</p>

                </div>
            </>
        )
    }

}

export default Footer