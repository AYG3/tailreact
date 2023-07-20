import React from 'react';
import Gildev3 from '../../assets/Gildev3.jpg'
import { BiSolidMedal } from 'react-icons/bi'
import { MdPeople } from 'react-icons/md'
import { FaFolderPlus } from 'react-icons/fa'

const about = () => {
    return(
        <div id='about' className='flex flex-col container mx-auto mt-20 space-y-8'>
            <div className="flex flex-col w-full container items-center justify-center">
                <h3>Get to know</h3>
                <h1 className='text-4xl text-blue-600 font-semibold'>Me</h1>
            </div>
                    
            <div className=' flex bg-gray-900 w-3/4 items-center justify-center self-center rounded-2xl md:w-auto ' >
                <div className='flex justify-center items-center w-full py-7 lg:py-9 '>
                    <img src={Gildev3} className='rounded-2xl h-96 w-full object-cover object-center transform sm:rotate-12 transition duration-500 hover:rotate-0 sm:w-auto xl:h-[28rem] ' alt="Also fine boy like me" />
                </div>
            </div> 
            
            <div className='flex flex-col text-blue-600 space-y-8 justify-center items-center sm:flex-row sm:space-x-8 '>
                <div className='flex flex-col bg-gray-900 w-2/4 text-center rounded-xl p-8 space-y-4 ring-1 mt-8 ring-blue-600 sm:p-4 sm:w-1/4 lg:w-1/5'>
                    <BiSolidMedal className='self-center'/>
                    <h1> Experience</h1>
                    <small>2+ years</small>
                </div>
                <div className='flex flex-col bg-gray-900 w-2/4 text-center rounded-xl p-8 space-y-4 ring-1 ring-blue-600 sm:p-4 sm:w-1/4 lg:w-1/5'>
                    <MdPeople className='self-center'/>
                    <h1> Clients</h1>
                    <small>Very many now</small>
                </div>
                <div className='flex flex-col bg-gray-900 w-2/4 text-center rounded-xl p-8 space-y-4 ring-1 ring-blue-600 sm:p-4 sm:w-1/4 lg:w-1/5'>
                    <FaFolderPlus className='self-center'/>
                    <h1> Projects</h1>
                    <small>50+ projects</small>
                </div>
            </div>

        </div>
    );
}

export default about;