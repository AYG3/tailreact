import React from 'react';
import Gildev3 from '../../assets/Gildev3.jpg'

const about = () => {
    return(
        <div className='flex flex-col container mx-auto mt-20'>
            <div className="flex flex-col w-full container items-center justify-center">
                <h3>Get to know</h3>
                <h1 className='text-4xl text-blue-600 font-semibold'>Me</h1>
            </div>
                    
            <div className=' flex bg-gray-900 w-3/4 mt-8 align-items-center justify-center self-center'>
                <div className=' mx-7 w-1/2 p-5'>
                    <img src={Gildev3} className='' alt="Also fine boy like me" />
                </div>
            </div>
            

        </div>
    );
}

export default about;