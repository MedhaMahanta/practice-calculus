import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem("newUser")).userObject.given_name;
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-violet-200 to-indigo-300 h-screen bg-cover relative'>
        <Navbar/>
        <div className='mt-20 ml-10'> 
          <div className='text-3xl font-semibold'> Welcome, {username}. </div>
          <div className='mt-5 text-xl'> Get started with your personalized AP Calculus practice.</div>
          <div className='relative float-left mt-10'>
            <div class = "absolute inset-0 bg-blue-800 rounded-lg blur-sm"> </div>
            <button onClick={() => {navigate("/practice")}} className = 'relative bg-white p-2 rounded-md hover:drop-shadow-lg'> Topic by topic practice  </button>
          </div>
          <div className='relative float-left mt-10 ml-14'>
            <div class = "absolute inset-0 bg-blue-800 rounded-lg blur-sm"> </div>
            <button onClick={() => {navigate("/random")}} className = 'relative bg-white p-2 rounded-md hover:drop-shadow-lg'> Random Problem Generator  </button>
          </div>
        </div>
          {/* <div class="absolute inset-x-0 bottom-0">
            <Footer/>
          </div> */}
    </div>
  )
}

export default Dashboard;