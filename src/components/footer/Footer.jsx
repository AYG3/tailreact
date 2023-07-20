import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'


const Footer = () =>{
    return(
        <div id='footer' className=' flex  flex-col h-[44rem] text-gray-900 bg-blue-500'> 
            <h1 className='text-4xl self-center font-extrabold p-10'>AYG3</h1>
            <div className='flex flex-col items-center '>
                <ul className='flex flex-col ring-1 ring-red-700 items-center space-y-8  '>
                    <li><a href="#header">Header</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {/* <div className='flex bottom-0'>
                    <BiLogoGmail />
                    <AiFillInstagram />
                    <IoLogoWhatsapp />
                </div> */}
                <p className='pt-28'>&copy; AYG3. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;