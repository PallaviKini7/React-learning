import React, { useState } from 'react'
import '../login/login.css'
import Button from '../../component/button/button'

function Login() {
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
            <div className='right-rectangle'>
                <form className='form'>
                    <div className='heading'>SIGN IN TO YOUR ACCOUNT</div>
                    <div className='heading2'>
                    <div className='hd1'>SIGN IN</div>
                    <div className='hd2'>SIGN UP</div>
                        </div>
                    <div className='box'><input type="text" placeholder='Mobile Number' className='input'/></div>
                    <div className='psswrd'>
                   
                        {
                            pswrd?
                            <>
                            <input type="password" placeholder='MPin' className='input'/>
                            <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd}/>
                            </>
                            :
                            <>
                            <input type="text" placeholder='MPin' className='input'/>
                            <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd}/>
                            </>

                        }
                    </div>
                    
                    <div className='forgot'>Forgot your password?</div>
                    <div className='btn'>
                        <Button value ="SIGN IN"/>
                    </div>
                    <div className='dnthave'>Don't have a Account? SIGNUP</div>
                </form>
            </div>
            

        </div >
    )
}

export default Login