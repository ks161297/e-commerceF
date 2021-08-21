import React from 'react'
import Navbar from '../components/Navbar'
import Contacto from '../components/Contacto'
import HeroSection from '../components/HeroSection'

export default function ContactoView() {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <br/>
            <Contacto/>
        </div>
    )
}
