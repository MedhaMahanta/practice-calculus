import React from 'react';
import {useNavigate} from "react-router-dom";

const Menu = (props) => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center gap-20 bg-gray-100 text-gray-900 border-b-2' >
        <div onClick={() => {navigate("/practice")}} className= {` ${props.tab === "tbtp" ? "menu-clicked" : "not-clicked"} menu-items`} title='Topic-by-Topic Practice'> Topic-by-Topic Practice</div>
        <div onClick={() => {navigate("/random")}} className= {`menu-items ${props.tab === "rgp" ? "menu-clicked" : "not-clicked"}`} title='Random Problem Generator'> Random Problem Generator</div>
        {/* <div onClick={() => {navigate("/")}} className= {`menu-items ${props.tab === "" ? "menu-clicked" : "not-clicked"}`} title='Leaderboard'> Leaderboard</div> */}
    </div>
  )
}

export default Menu;