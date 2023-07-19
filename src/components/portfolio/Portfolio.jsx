import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/profile1.jpg'
import IMG2 from '../../assets/profile2.jpg'
import IMG3 from '../../assets/profile3.jpg'
import IMG4 from '../../assets/profile4.jpg'
import IMG5 from '../../assets/profile5.jpg'
import IMG6 from '../../assets/profile6.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Lo-Fi Room',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21879979-Lo-Fi-Room'
      },
      {
        id: 2,
        image: IMG2,
        title: 'Glowing Flower Tutorial',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21833948-Glowing-Flower-Tutorial'
      },
      {
        id: 3,
        image: IMG3,
        title: 'Diablo 4 Barbarian Tutorial',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21822132-Diablo-4-Barbarian-Tutorial'
      },
      {
        id: 4,
        image: IMG4,
        title: 'Winery Tutorial',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21771234-Winery-Tutorial'
      },
      {
        id: 5,
        image: IMG5,
        title: 'Mixed Reality Tutorial',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21759111-Mixed-Reality-Tutorial'
      },
      {
        id: 6,
        image: IMG6,
        title: 'Game Animation Tutorial',
        github: 'https://github.com/AYG3',
        demo: 'https://dribbble.com/shots/21707283-Game-Animation-Tutorial'
      }
    
]

const Portfolio = () => {
    return (
        <div id='portfolio' className=' mt-36'>
            <div className='flex flex-col items-center justify-center'>
                <h3>Some of my works</h3>
                <h1 className='text-4xl text-blue-600 text-semibold'>Projects</h1>
            </div>

            <div className='flex flex-col mt-8 lg:grid lg:grid-flow-rows lg:grid-cols-2 xl:grid-cols-3'>
                {
                data.map(({id, image,title,github, demo} ) => {
                    return(
                        <div key={id} className='group bg-gray-900 mt-6 mx-20   px-7 pb-2 pt-7 rounded-3xl text-blue-600  hover:bg-gray-200 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 transition duration-500 sm:mx-auto xl:mx-7 2xl:mx-10 '>
                            <img src={image} className='rounded-3xl sm:h-72 2xl:mx-auto' alt="" />
                            <h2 className='text-2xl  mt-2 2xl:ml-8'>{title}</h2>
                        
                            <div className=' flex items-center justify-start space-x-10 mt-8 mb-3 text-white group-hover:text-gray-900 2xl:ml-5'>
                                <button href={github} className='bg-transparent ring-1 ring-blue-600 px-8 py-4 rounded-xl font-semibold transition duration-500 group-hover:bg-gray-900 group-hover:text-gray-200 group-hover:ring-0'>Github</button>
                                <button href={demo} className='bg-blue-600 px-10 py-4 rounded-xl font-semibold transition duration-500 text-gray-900 group-hover:bg-transparent group-hover:ring-1 group-hover:ring-gray-900'>Live demo</button>
                            </div>
                        </div>
                    )
                 })
                }
            </div>
        </div>
    );
}

export default Portfolio;