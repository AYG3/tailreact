import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'


const Footer = () =>{
    return(
        <div id='footer' className='flex  flex-col h-max items-center text-gray-900 bg-blue-500'>
            <h1 className='text-4xl self-center font-extrabold p-10'>AYG3</h1>
            <div className='flex flex-col items-center md:flex-row md:w-full justify-center'>
                <ul className='flex flex-col items-center space-y-8 mb-16 md:mb-14  md:flex-row md:space-y-0 md:justify-between md:w-full md:mx-12'>
                    <li><a href="#header">Header</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className='flex text-3xl justify-between w-28 content-box pb-8 mb-8 md:pb-14'>
                <a href="mailto:gilbertayoku3@gmail.com" target='_blank' rel='noreferrer'><BiLogoGmail /></a>
                <a href="https://www.instagram.com/ayoku_g3/" target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                <a href="https://api.whatsapp.com/send?phone=+2349150710365" target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
            </div>
            <p className='mt-12 text-sm md:mt-8'>&copy; AYG3. All rights reserved</p>
        </div>
    )
}

export default Footer;