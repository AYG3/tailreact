import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import './contact.css'

const Contact = () =>{
    return(
        <div id='contact' > 
            <div className='flex flex-col items-center'>
                <h3>Get in touch</h3>
                <h1 className='text-4xl text-blue-600 font-semibold'>Contact</h1>
            </div>

            <div className='flex flex-col items-center  mx-10 bg-gray-900 rounded-xl'>
                <div className=' flex flex-col items-center ring-1 ring-blue-600 px-7 py-8 my-5 rounded-xl space-y-3 text-blue-600'>
                    <BiLogoGmail className='text-blue-600 font-bold' />
                    <h1 className='text-lg text-semibold text-white'>Gmail</h1>
                    <h3 className='font-bold text-gray-500'>gilbertayoku3@gmail.com</h3>
                    <a href="mailto:gilbertayoku3@gmail.com">Send me a message</a>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;