import React, { useEffect, useState } from 'react'
import Button from '../../component/button/button'
import '../signup/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [pswrd, setPswrd] = useState(true)
    const [tab, setTab] = useState(1)

    //   type usersType = { mobileNo: number; mPin: number };
    const navigate = useNavigate();

    const storeUsers = localStorage.getItem("users") || "[]";

    console.log("storeUsers", storeUsers);

    const signUpHandler = (event: any) => {
        event.preventDefault();

        const mobile = event.target.mobile.value;
        const pin = event.target.pin.value;
        const mPin = event.target.mPin.value;

        const userData = {
            mobile,
            pin,
            mPin,
        };

        const previousData = JSON.parse(localStorage.getItem("users") || "[]");

        const arr: any[] = [];

        previousData.map((user: any) => {
            if (userData.mobile === user.mobile) {
                arr.push("exist");
            }
        });
        // if(mobile.maxLength<0)
        // {
        //     toast("number is short")
        // }

        if (arr.includes("exist")) {
            toast("user already exist");
        } else {
            if (mobile === "" && pin === "" && mPin === "") {
                alert("Enter all fields");
            } else {
                if (pin === mPin) {
                    previousData.push(userData);
                    localStorage.setItem("users", JSON.stringify(previousData));
                    localStorage.setItem(JSON.stringify(mobile), JSON.stringify([]));
                    navigate("/");
                } else {
                    toast("Enter same pins");
                }
            }
        }
    };


    function togglepswrd() {
        setPswrd(!pswrd)

    }
    function toggleTab(id: number) {
        setTab(id)
    }

    const notify = () => {
        toast.success('✔ Wow so easy!')

    }



    console.log("this is the value of pswrd", pswrd);

    return (
        <div className='base-container'>
            <div className='container'>
                <div className='left-rectangle'>
                    <img src={require("../../asset/Image/logo.png")} alt="" className='logoimg' />
                    <img src={require("../../asset/Image/paalogo.png")} alt="" className='paalogo' />
                    <div className='text'>Project & Manage every password in your business</div>
                </div>
                <div className='smalline'> </div>
                <div className='signup-right-rectangle'>
                    <form className='form' onSubmit={signUpHandler}>
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
                        <div className='box'><input type="text" name='mobile' placeholder='Enter Mobile Number' className='input' required
                            minLength={10}
                            maxLength={10} /></div>
                        <div className='box1'><input type="password" name="pin" placeholder='Enter 4 digit MPin' className='input' required
                            minLength={4}
                            maxLength={4} /></div>
                        <div className='psswrd1'>

                            {
                                pswrd ?
                                    <>
                                        <input type="password" placeholder='Re-Enter Enter 4 digit MPin' className='input' name="mPin" required
                                            minLength={4}
                                            maxLength={4} />
                                        <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd} />
                                    </>
                                    :
                                    <>
                                        <input type="text" placeholder='Re-Enter Enter 4 digit MPin' className='input' name="mPin" required
                                            minLength={4}
                                            maxLength={4} />
                                        <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd} />
                                    </>

                            }
                        </div>


                        <div className='btn'>
                            <button className='button' >SIGN UP </button>
                            {/* <Button value ="SIGN UP" onClick={notify}/> */}
                        </div>

                    </form>
                </div>


            </div >
        </div>
    )
}

export default Signup