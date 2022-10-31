import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import { Routes, Route } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/home/home';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
     
      </Routes>
       <ToastContainer  
          position= "top-center"
            autoClose= {3000}
            hideProgressBar= {false}
            closeOnClick= {false}
            pauseOnHover
            draggable
            theme= "light"/>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Home/> */}
     
    </div>
  );
}

export default App;
