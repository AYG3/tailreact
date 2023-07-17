import React from 'react'
import CV from '../../assets/CV.docx'

const CTA = () =>{
    return (
        <div className='pt-8'>
            <a href={CV} download className='btn-black m-4 border-2 border-blue-600 hover:bg-gray-300 hover:text-blue-800 transition duration-500'>Download CV</a>
            <a href="#contact" className='btn m-4 bg-gray-300 text-blue-900 hover:bg-blue-800 transition'>Let's Talk</a>
        </div>
    );
}

export default CTA;