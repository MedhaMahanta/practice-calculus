import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" exact element = {<Home/>} />
            <Route path = "/dashboard" exact element = {<Dashboard/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;