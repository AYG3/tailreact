import React from 'react';
import IMG1 from '../../assets/Gildev4.jpg'
import IMG2 from '../../assets/Gildev.jpg'
import IMG3 from '../../assets/Gildev5.jpg'
import IMG4 from '../../assets/Gildev6.jpg'



import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
    {
        name: 'Sir Kepler',
        picture: IMG1,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatibus dicta quibusdam quas reprehenderit nihil aliquam necessitatibus tempore dignissimos ut!",
    },
    {
        name: 'Gil dev',
        picture: IMG2,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatibus dicta quibusdam quas reprehenderit nihil aliquam necessitatibus tempore dignissimos ut!",
    },
    {
        name: 'Mario Solandro',
        picture: IMG3,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatibus dicta quibusdam quas reprehenderit nihil aliquam necessitatibus tempore dignissimos ut!",
    },
    {
        name: 'Luigi Solandro',
        picture: IMG4,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatibus dicta quibusdam quas reprehenderit nihil aliquam necessitatibus tempore dignissimos ut!",
    },
]



const Testimonials = () => {
    
    
    return (
        <div id='testimonials' className='flex flex-col user-select-none '>
            <div className='flex flex-col items-center'>
                <h3>See some reports</h3>
                <h1 className='text-semibold text-blue-600 text-4xl'> Reviews</h1>
            </div>
            <Swiper className=' w-2/3 pb-12 lg:w-[48rem] 2xl:w-[60rem]'
            modules={[Navigation, Pagination]} spaceBetween={60} slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
            {
                data.map(({name, picture, review}, index) => {
                    return(
                        <SwiperSlide key={index} className='flex flex-col items-center bg-gray-900 py-11 rounded-xl w-2/5 mt-10 '>
                            <div className='flex flex-col items-center'>
                                <img src={picture} className='rounded-xl h-16 object-cover object-center' alt="" />
                                <h3 className='text-blue-600 mt-2'>{name}</h3>
                            </div>

                            <div className=''>
                                <p className='text-gray-200 text-sm px-8 mt-4'>{review}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
    );
}

export default Testimonials;