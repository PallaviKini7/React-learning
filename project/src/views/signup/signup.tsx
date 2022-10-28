import React, { useState } from 'react'
import Button from '../../component/button/button'
import '../signup/signup.css'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [pswrd, setPswrd] = useState(true)
  const [tab, setTab] = useState(1)

  function togglepswrd() {
      setPswrd(!pswrd)

  }
  function toggleTab(id: number) {
    setTab(id)
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
                  <div className='sup-heading'>SIGN UP</div>
                  <div className='heading2'>
                    
                       <div className='hd1'><Link to='/' className='link'>SIGN IN</Link></div>
                  {/* <div className='shd2'>SIGN UP</div> */}
                  <div className={tab == 1 ? 'underline' : ''} onClick={() => toggleTab(1)}>
                                <Link to='/' className='link'>SIGN UP</Link>
                            {/* <div className='hd1'>SIGN IN</div> */}
                        </div>
                  {/* <div className='underline2'></div> */}
               
                      </div>
                  <div className='box'><input type="text" placeholder='Enter Mobile Number' className='input'/></div>
                  <div className='box1'><input type="password" placeholder='Enter 4 digit MPin' className='input'/></div>
                  <div className='psswrd1'>
                 
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