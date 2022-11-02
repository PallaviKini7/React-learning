import React, { useEffect, useState } from 'react'
import '../login/login.css'
import Button from '../../component/button/button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {


    const navigate = useNavigate();

  useEffect(() => {

    const auth = localStorage.getItem("auth")

    if (auth != "true") {

      navigate("/")

    }

  },[])

    const [pswrd, setPswrd] = useState(true)
   
    const submitHandler = (e: any) => {
        e.preventDefault();

        const mobile = e.target.mobile.value;
        const mPin = e.target.mPin.value;

        const newArr: any[] = [];
        const userData = JSON.parse(localStorage.getItem("users") || "[]");
        userData.map((user: any) => {
            
            
            if (mobile === user.mobile && mPin === user.mPin) {
                newArr.push("exists");
            }
        });
        if (newArr.includes("exists")) {
            localStorage.setItem("currentUser", JSON.stringify([mobile]));
           
            toast.success("Congrats!!Success")
            navigate("/Home");
        } else {
            toast("please signUp to Login...");
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
                    <form className='form' onSubmit={submitHandler}>
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
                        <div className='box'><input type="text" placeholder='Mobile Number' name='mobile' className='input' required
                            minLength={10}
                            maxLength={10} /></div>
                        <div className='psswrd'>

                            {
                                pswrd ?
                                    <>
                                        <input type="password" placeholder='MPin' className='input' required name='mPin'
                                            minLength={4}
                                            maxLength={4} />
                                        <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd} />
                                    </>
                                    :
                                    <>
                                        <input type="text" placeholder='MPin' className='input' name='mPin' required
                                            minLength={4}
                                            maxLength={4} />
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