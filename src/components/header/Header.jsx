import React from 'react'
import Headersocials from './headersocials'
import CTA from './CTA'
import Gildev2 from '../../assets/Gildev2.jpg'
import './header.css'

const Header = () =>{
    return(
        <div id='header' className='mt-20'>
            <div className="container mx-auto header__container text-center">
                <h2>I'm</h2>
                <h1 className='text-4xl text-blue-600 font-semibold'>AYG3</h1>
                <h3>A FullStack Developer</h3>
                <CTA />
            </div>

            <div className="flex relative items-center justify-center bg-gray-900 mt-14 w-3/4 border-4 rounded-xl p-10 border-blue-600 mx-auto">
                <img src={Gildev2} alt="Fine Boy like me" className=' md:h-[40rem] h-96 :h-96 self-center shadow-2xl rounded-2xl object-cover object-center' />
                <div className='flex flex-col items-center absolute transform rotate-90 bottom-16 right-0 sm:block hidden'>
                    <a href="#footer" className=' text-blue-600 cursor-pointer hover:text-gray-500'>Scroll Down_____</a>
                </div>
                <Headersocials />
            </div>
        </div>
    );
}

export default Header;