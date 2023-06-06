import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='bg-[url("home-background.png")] h-screen bg-cover'>
        <Navbar/>
        <div className='ml-3 flex flex-col items-center'>
          <div className='text-center ml-12 mr-12 mt-52 text-3xl text-slate-200' >
            Welcome to Practice Calculus: a concept review for AP Calculus AB
          </div>
        </div>
    </div>
  )
}

export default Home;