import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { SiTailwindcss } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
import { SiPhp } from 'react-icons/si'
import { SiSqlite } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { BiLogoNodejs } from 'react-icons/bi'


const experience = () => {
    return( 
    <div id='experience' className='container mx-auto w-full flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center container mx-auto">
            <h2>Check me out</h2>
            <h1 className="text-4xl text-blue-600 font-semibold">Skills</h1>
        </div>    

        <div className=" mx-auto flex flex-col items-center justify-center lg:grid lg:grid-rows-1 lg:grid-flow-col 2xl:px-32 box-content ">
        
            <div className="flex flex-col container mx-auto mt-11 bg-gray-900 text-blue-600  rounded-xl lg:w-96 lg:mx-8 xl:mx-12 xl:w-4/5 2xl:mr-32 2xl:ml-8">
                    <h3 className=' text-lg font-bold self-center mt-6' > Frontend Technologies</h3>
                    <div className='grid grid-cols-2 ring-1 ring-blue-500 rounded-xl my-8 mx-6 gap-12 p-4'>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <AiFillHtml5 className='text-xl' />
                                <h5 className='font-semibold' >HTML5</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <FaCss3Alt className='text-xl' />
                                <h5 className='font-semibold' >CSS</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <BiLogoJavascript className='text-xl' />
                                <h5 className='font-semibold' >JAVASCRIPT</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <SiTailwindcss className='text-xl' />
                                <h5 className='font-semibold' >Tailwind CSS</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <BiLogoReact className='text-xl' />
                                <h5 className='font-semibold' >React JS</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <DiDjango className=' text-2xl' />
                                <h5 className='font-semibold' >Django</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                    </div>
                </div>


                {/* BACKEND */}


                <div className="flex flex-col container mx-auto mt-11 bg-gray-900 text-blue-600 rounded-xl lg:w-96 lg:mx-8 xl:mx-12 xl:w-4/5 2xl:mr-32 2xl:ml-16  ">
                    <h3 className=' text-lg font-bold self-center mt-6' > Backend Technologies</h3>
                    <div className='grid grid-cols-2 ring-1 ring-blue-500 rounded-xl my-8 mx-6 gap-12 p-4'>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <SiPhp className='text-xl' />
                                <h5 className='font-semibold' >PHP</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <SiSqlite className='text-xl' />
                                <h5 className='font-semibold' >SQL</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <SiMongodb className='text-xl' />
                                <h5 className='font-semibold' >MongoDB</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <BiLogoNodejs className='text-xl' />
                                <h5 className='font-semibold' >Node JS </h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <SiPython className='text-xl'/>
                                <h5 className='font-semibold' >Python</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                        <article className='flex flex-col'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <DiJava className='text-xl'/>
                                <h5 className='font-semibold' >Java</h5>
                            </div>
                            <small>Experienced</small>
                        </article>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default experience;

