import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='ml-3'>
          <div className='flex items-center justify-center mt-52 text-2xl' >
            Welcome to Practice Calculus: a concept review for AP Calculus AB
          </div>
          {/* <div className='flex items-center justify-center text-2xl bg-sky-300 w-1/3' >
            Get Started
          </div> */}
        </div>
    </div>
  )
}

export default Home;