import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const headersocials = () =>{
    return(
        <div className='flex flex-col left-4 space-y-4 absolute bottom-7'>
            <a href="https://github.com/AYG3" target="_blank" rel="noreferrer"  className='text-blue-600 hover:text-gray-500 transition'><BsGithub /></a>
            <a href="https://www.linkedin.com/in/gilbert-ayoku-2b625a25b/" target="_blank" rel="noreferrer" className='text-blue-600 hover:text-gray-500 transition'><BsLinkedin /></a>
            <a href="dribble.com" target="_blank" rel="noreferrer" className='text-blue-600 hover:text-gray-500 transition cursor-pointer'><BsDribbble /></a>
        </div>
    );
}

export default headersocials;