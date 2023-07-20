import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

 
const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i6o34uq', 'template_oko0byl', form.current, 'SrQVUDVcjiwrFoA3x')

    e.target.reset()
    };
    
    
    return(
        <div id='contact' className='container mx-auto flex flex-col items-center 2xl:px-40 xl:px-32 md:px-18'> 
            <div className='flex flex-col items-center'>
                <h3>Get in touch</h3>
                <h1 className='text-4xl text-blue-600 font-semibold'>Contact</h1>
            </div>

            <div className='flex flex-col items-center md:container md:mx-auto bg-gray-900 rounded-xl pr-9 py-10  md:grid md:items-start md:grid-flow-col md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col items-start pl-8 w-64 lg:cols-span-1'>
                    <div className=' flex flex-col items-center ring-1 ring-blue-600 px-7 py-8 my-5 rounded-xl  space-y-3 text-blue-600 sm:w-60 xl:w-72'>
                        <BiLogoGmail className='text-blue-600 font-bold' />
                        <h1 className='text-lg text-semibold text-white'>Gmail</h1>
                        <h3 className='font-bold text-gray-500'>gilbertayoku3@gmail.com</h3>
                        <a href="mailto:gilbertayoku3@gmail.com" target='_blank' rel='noreferrer' className='hover:text-gray-300 duration-500'>Send me a message</a>
                    </div>
                    <div className=' flex flex-col items-center ring-1 ring-blue-600 px-12 py-8 my-5 rounded-xl space-y-3 text-blue-600 sm:w-60 xl:w-72'>
                        <AiFillInstagram className='text-blue-600 font-bold' />
                        <h1 className='text-lg text-semibold text-white'>Instagram</h1>
                        <h3 className='font-bold text-gray-500'>ayoku_g3</h3>
                        <a href="https://www.instagram.com/ayoku_g3/" target='_blank' rel='noreferrer' className='hover:text-gray-300 duration-500 '>Send me a message</a>
                    </div>
                    <div className=' flex flex-col items-center ring-1 ring-blue-600 px-12 py-8 my-5 rounded-xl space-y-3 text-blue-600 sm:w-60 xl:w-72'>
                        <IoLogoWhatsapp className='text-blue-600 font-bold' />
                        <h1 className='text-lg text-semibold text-white'>Whatsapp</h1>
                        <h3 className='font-bold text-gray-500'>+234 91 507 103 65</h3>
                        <a href="https://api.whatsapp.com/send?phone=+2349150710365" target='_blank' rel='noreferrer' className='hover:text-gray-300 duration-500'>Send me a message</a>
                    </div>
                </div>
                <div className=' lg:col-span-2 '>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-24 items-center w-72 text-gray-300 text-sm md:space-y-18 md:w-auto md:items-stretch'>
                        <input type="text" name='name' className='mt-16 ring-1 ring-blue-600 bg-transparent rounded-lg h-14 p-3 outline-none md:mt-8' placeholder='Your name' required/>
                        <input type="email" name='email' className='ring-1 ring-blue-600 bg-transparent rounded-lg h-14 p-3 outline-none' placeholder='Your email' required/>
                        <textarea name=""className='ring-1 ring-blue-600 bg-transparent rounded-lg p-3 resize-none outline-none' placeholder='Your message'  id="" rows={7}  ></textarea>
                        <button type="submit" className='bg-blue-600 w-28 py-4 rounded-lg font-bold hover:bg-transparent hover:ring-1 duration-300'>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;