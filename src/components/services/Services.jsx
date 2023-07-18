import React from 'react';
import './services.css'
import { LiaDotCircle } from 'react-icons/lia'

const Services = () => {
    return <div id='services' >
        <div className="flex flex-col items-center">
            <h3>What Can I Do for you ?</h3>
            <h1 className='text-4xl font-semibold text-blue-600'>Services</h1>
        </div>


        <div className='lg:grid grid-cols-3 grid-flow-col'>
            <div className='flex flex-col items-center mt-10 mx-16 space-y-9 bg-gray-900 rounded-b-3xl  lg:'>
                <div className='flex w-full h-14  bg-blue-500 rounded-b-3xl items-center py-8'>
                    <h3 className='mx-auto text-xl font-bold '>UI/UX Design </h3>
                </div>

                <ul className='text-white  space-y-5 p-6'>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative  '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                </ul>
            </div>
            
            {/* WEB DEVELOPMENT */}
            <div className='flex flex-col items-center mt-10 mx-16 space-y-9 bg-gray-900 rounded-b-3xl'>
                <div className='flex w-full h-14  bg-blue-500 rounded-b-3xl items-center py-8'>
                    <h3 className='mx-auto text-xl font-bold '>Web Development </h3>
                </div>

                <ul className='text-white  space-y-5 p-6'>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative  '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                </ul>
            </div>

            {/* UI/UX DESIGN */}
            <div className='flex flex-col items-center mt-10 mx-16 space-y-9 bg-gray-900 rounded-b-3xl'>
                <div className='flex w-full h-14  bg-blue-500 rounded-b-3xl items-center py-8'>
                    <h3 className='mx-auto text-xl font-bold '>Web Development </h3>
                </div>

                <ul className='text-white  space-y-5 p-6'>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative'>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative  '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                    <li className='p-4 grid grid-rows-1 relative '>
                        <LiaDotCircle className='text-blue-600 absolute mt-5'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis asperiores ullam voluptates eius dolores.
                    </li>
                </ul>
            </div>
        </div>
    </div>;
}

export default Services;