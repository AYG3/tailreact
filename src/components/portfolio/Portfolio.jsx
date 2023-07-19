import React from 'react';
import './portfolio.css'


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
            <div className='flex flex-col space-x-16'>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;