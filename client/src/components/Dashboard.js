import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className=''> 
          <button onClick={() => {navigate("/practice")}} className = "bg-slate-200"> Topic by topic practice</button>
        </div>
    </div>
  )
}

export default Dashboard;