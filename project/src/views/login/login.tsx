import React, { useState } from 'react'
import '../login/login.css'
import Button from '../../component/button/button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [pswrd, setPswrd] = useState(true)
    const navigate = useNavigate();

    //local storage
    if (localStorage.getItem('users') === null) {
        localStorage.setItem(
            'user Data',
            JSON.stringify(
                localStorage.setItem(
                    'users',
                    JSON.stringify([
                        { mobileNo: '9036825554', mPin: '9036' },
                    ])
                )
            )
        );
    }
    const loginHandler = (e: any) => {
      e.preventDefault();
      type usersType = { mobileNo: number; mPin: number };
      console.log(e.target);
    
    
      const mobileNo = e.target.mobileNo.value;
      const mPin = e.target.mPin.value;
    
      const userData = { mobileNo, mPin };
      console.log('userData', userData);
    
      const users: usersType[] = JSON.parse(
          localStorage.getItem('users') || '[]'
      );
      console.log('users', users);
    
      for (let i = 0; i < users.length; i++) {
          if (userData.mobileNo === users[i].mobileNo) {
              if (userData.mPin === users[i].mPin) {
                  localStorage.setItem('auth', 'authenticated');
                  
                  navigate('/Home');
                  localStorage.setItem('currentUser', mobileNo);
                //   window.location.reload();
                toast.success('Congrats!!Login succesful')
              }
          }
      }
    };

   
    const [tab, setTab] = useState(1)
    
    function togglepswrd() {
        setPswrd(!pswrd)

    }
    function toggleTab(id: number) {
        setTab(id)
    }
 
    return (
        <div className='base-container'>
        <div className='container'>
            <div className='left-rectangle'>
                <img src={require("../../asset/Image/logo.png")} alt="" className='logoimg' />
                <img src={require("../../asset/Image/paalogo.png")} alt="" className='paalogo' />
                <div className='text'>Project & Manage every password in your business</div>
            </div>
            <div className='smalline'> </div>
            <div className='right-rectangle'>
                <form className='form' onSubmit={loginHandler}>
                    <div className='heading'>SIGN IN TO YOUR ACCOUNT</div>
                    <div className='heading2'>

                        <div className={tab == 1 ? 'underline' : ''} onClick={() => toggleTab(1)}>
                                <Link to='/' className='link'>SIGNIN</Link>
                            {/* <div className='hd1'>SIGN IN</div> */}
                        </div>
                        {/* <div className={tab == 2 ? 'underline' : ''} onClick={() => toggleTab(2)}>
                            <div className='hd1'>SIGN IN</div> */}
                            <div className='hd2'>
                                <Link to='/Signup' className='link'>SIGNUP</Link>
                                {/* SIGN UP */}
                            </div>
                        {/* </div> */}
                    </div>
                    <div className='box'><input type="text" placeholder='Mobile Number' name='mobileNo' className='input' required /></div>
                    <div className='psswrd'>

                        {
                            pswrd ?
                                <>
                                    <input type="password" placeholder='MPin' className='input' required name='mPin'  />
                                    <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd} />
                                </>
                                :
                                <>
                                    <input type="text" placeholder='MPin' className='input' required name='mPin' />
                                    <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd} />
                                </>

                        }
                    </div>

                    <div className='forgot'>Forgot your password?</div>
                    <div className='btn'>
                    <button className='sin-button' type='submit' >SIGN IN</button>
                    </div>
                    <div className='dnthave'>Don't have a Account?<Link to='/Signup' className='link'>SIGNUP</Link></div>
                </form>
            </div>


        </div >
          </div>

    )
}

export default Login