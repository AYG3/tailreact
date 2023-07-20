import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { LiaBusinessTimeSolid } from 'react-icons/lia'
import { MdNetworkWifi } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import './nav.css'

const Nav = () => {

    const [active, setActive] = useState('#header')

    return( 
        <div className="fixed bottom-12 inset-x-0 mx-auto w-max flex justify-center bg-gray-900 p-3 sm:space-x-2 rounded-xl text-blue-600 space-x-0 sm:space-x-2 z-[999]">

            <a href="#header" onClick={() =>setActive('#header')} className={`sm:p-2 p-1 rounded-lg font-bold text-2xl ${active === '#header' ? 'active' : ''}`}> <AiTwotoneHome /></a>
            <a href="#about" onClick={() =>setActive('#about')} className= {`sm:p-2 p-1 rounded-lg font-bold text-2xl ${active === '#about' ? 'active' : ''} `}> <FaUser /></a>
            <a href="#experience" onClick={() => setActive("#experience")} className={`sm:p-2 p-1 rounded-lg font-bold text-2xl ${active === '#experience' ? 'active' : ''}`}> <LiaBusinessTimeSolid /></a>
            <a href="#services" onClick={() =>setActive('#services')} className={`sm:p-2 p-1 rounded-lg font-bold text-2xl ${active === '#services' ? 'active' : ''}`}> <MdNetworkWifi /></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={`sm:p-2 p-1 rounded-lg font-bold text-2xl ${active === '#contact' ? '#active' : ''}` }> <IoMdContact /></a>
        </div>        
    );
}

export default Nav;