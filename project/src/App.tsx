import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      {/* <Login /> */}
      {/* <Signup /> */}
     
    </div>
  );
}

export default App;
