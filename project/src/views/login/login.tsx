import React, { useState } from 'react'
import '../login/login.css'
import Button from '../../component/button/button'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [pswrd, setPswrd] = useState(true)
    const [mobile,setMobile] = useState('')
    const [mpin, setMpin] = useState('')
    const [tab, setTab] = useState(1)
    const number = localStorage.getItem('mobile')? localStorage.getItem('mobile'):'999999999'
    const pin = localStorage.getItem('mpin')?localStorage.getItem('mpin'):'0000'


    function togglepswrd() {
        setPswrd(!pswrd)

    }
    function toggleTab(id: number) {
        setTab(id)
    }

    // const handleSubmit = (e) =>
    // {
    //     e.preventDefault();

    // }


    return (
        <div className='container'>
            <div className='left-rectangle'>
                <img src={require("../../asset/Image/logo.png")} alt="" className='logoimg' />
                <img src={require("../../asset/Image/paalogo.png")} alt="" className='paalogo' />
                <div className='text'>Project & Manage every password in your business</div>
            </div>
            <div className='smalline'> </div>
            <div className='right-rectangle'>
                <form className='form'>
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
                    <div className='box'><input type="text" placeholder='Mobile Number' className='input' required /></div>
                    <div className='psswrd'>

                        {
                            pswrd ?
                                <>
                                    <input type="password" placeholder='MPin' className='input' required />
                                    <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd} />
                                </>
                                :
                                <>
                                    <input type="text" placeholder='MPin' className='input' required />
                                    <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd} />
                                </>

                        }
                    </div>

                    <div className='forgot'>Forgot your password?</div>
                    <div className='btn'>
                        {/* <Button value="SIGN IN" onClick={handleSubmit}/> */}
                    </div>
                    <div className='dnthave'>Don't have a Account?<Link to='/Signup' className='link'>SIGNUP</Link></div>
                </form>
            </div>


        </div >

    )
}

export default Login