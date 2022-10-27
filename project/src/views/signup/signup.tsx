import React, { useState } from 'react'
import Button from '../../component/button/button'
import '../signup/signup.css'

function Signup() {
  const [pswrd, setPswrd] = useState(true)

  function togglepswrd() {
      setPswrd(!pswrd)

  }
  console.log("this is the value of pswrd", pswrd);

  return (
      <div className='container'>
          <div className='left-rectangle'>
              <img src={require("../../asset/Image/logo.png")} alt="" className='logoimg'/>
              <img src={require("../../asset/Image/paalogo.png")} alt="" className='paalogo'/>
              <div className='text'>Project & Manage every password in your business</div>
          </div>
          <div className='smalline'> </div>
          <div className='signup-right-rectangle'>
              <form className='form'>
                  <div className='heading'>SIGN UP</div>
                  <div className='heading2'>
                    
                       <div className='hd1'>SIGN IN</div>
                  <div className='hd2'>SIGN UP</div>
               
                      </div>
                  <div className='box'><input type="text" placeholder='Enter Mobile Number' className='input'/></div>
                  <div className='box1'><input type="password" placeholder='Enter 4 digit MPin' className='input'/></div>
                  <div className='psswrd'>
                 
                      {
                          pswrd?
                          <>
                          <input type="password" placeholder='Re-Enter Enter 4 digit MPin' className='input'/>
                          <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd}/>
                          </>
                          :
                          <>
                          <input type="text" placeholder='Re-Enter Enter 4 digit MPin' className='input'/>
                          <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd}/>
                          </>

                      }
                  </div>
                  
                 
                  <div className='btn'>
                      <Button value ="SIGN UP"/>
                  </div>
                  
              </form>
          </div>
          

      </div >
  )
}

export default Signup