import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Practice from './components/pages/Practice';
import Random from './components/pages/Random';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" exact element = {<Home/>} />
            <Route path = "/dashboard" exact element = {<Dashboard/>} />
            <Route path = "/practice" exact element = {<Practice/>} />
            <Route path = "/random" exact element = {<Random/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;