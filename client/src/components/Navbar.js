import React, { useState } from 'react'
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [isModal, setIsModal] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("newUser")));
    const navigate = useNavigate();
    const google = window.google = window.google ? window.google : {}

    const signIn = () => {
        setIsModal((prevModal) => !prevModal);
    }

    function handleSignIn (res) {
        var userObject = jwt_decode(res.credential);
        setUser(userObject);
        localStorage.setItem("newUser", JSON.stringify({userObject}));
        setIsModal(false);
        var newUser = {name: userObject.name, emailID: userObject.email, problemsSolved: [], starredTopics: [],}

        axios.get(`http://localhost:4000/user/${userObject.email}`)
            .then((res) => {
                if (res.data !== null) {
                    axios.patch(`http://localhost:4000/user/${userObject.email}/loginCount`);
                } else {
                    axios.post("http://localhost:4000/user/add", newUser);
                }
            })
            .catch((err) => console.error(err));

        navigate("/dashboard");
    }

    function toggleUserMenu() {
        setUserMenu((prevMenuState) => !prevMenuState);
    }

    function logout() {
        localStorage.clear();
        navigate("/");
        setUser(null);
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("newUser")));
        /*global google*/
        if(!user) {
            google.accounts.id.initialize({
                client_id:"413359569419-886jbfd8de334tjucnq7fe95sj4fi5so.apps.googleusercontent.com",
                callback: handleSignIn
            })

            google.accounts.id.renderButton(
                document.getElementById("googleSignIn"),
                {theme: "outline", size: "large"}
            )
        }

    }, [])

  return (
    <div >
        <div className='h-1 bg-blue-800'></div>
        <div className='bg-white h-16 text-gray-700 text-2xl drop-shadow-sm font-body'>
            <h1 className='ml-8 pt-3.5 float-left font-bold '>Practice Calculus</h1>
            {user ? (
                <div className='float-right'>
                    <div onClick = {toggleUserMenu} className = "mr-12 grid grid-cols-2 mt-2.5 place-items-center opacity-80 hover:opacity-100 hover:cursor-pointer">
                        <img src = {user.userObject.picture} className = "w-11 rounded-full" referrerPolicy="no-referrer" alt='T'></img>
                        <div className='text-lg'> { user.userObject.name}</div>
                    </div>
                    {userMenu && (
                        <div className='drop-shadow-none absolute w-44 ml-4 bg-white text-[18px] border-solid border-gray-300 border-[1px] rounded-sm shadow-md mt-1'>
                            {/* <div className='pl-1'>
                                Profile
                            </div> */}
							<hr/>
                            <div onClick = {logout} className='pl-1 hover:cursor-pointer hover:bg-gray-100'>
                                Logout
                            </div>
                        </div>
                    )}
                </div>
                ) : (
                <div className='float-right relative mr-12 mt-2'>
                    <div class = " absolute inset-0 bg-blue-800 rounded-lg blur-sm"> </div>
                    <button onClick={signIn} className='relative bg-white text-slate-700 pt-2 pb-2 pl-6 pr-6 text-xl rounded-lg font-semibold hover:drop-shadow-lg'> Sign In</button>
                </div>
            )}
        </div>
        <div className = {` bg-black bg-opacity-30 absolute inset-0 justify-center items-center ${isModal ? " flex" : " hidden"}`}>
            <div className = "bg-white max-w-md p-5 rounded-lg shadow-xl">
                <div className="flex justify-between items-center">
                    <h4 className=" flex text-xl font-semibold"> Sign in with Google</h4>
                    <svg onClick={signIn} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="mt-2 text-lg">
                    <p  className = "text-gray-800">Signing in with Google allows you to save your work.</p>
                </div>
                <div id = "googleSignIn" className="mt-3 mb-3 place-items-center grid"> </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;