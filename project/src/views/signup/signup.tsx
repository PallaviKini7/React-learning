import React, { useEffect, useState } from 'react'
import Button from '../../component/button/button'
import '../signup/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [pswrd, setPswrd] = useState(true)
  const [tab, setTab] = useState(1)

  type usersType = { mobileNo: number; mPin: number };
  const navigate = useNavigate();

  if (localStorage.getItem('users') === null) {
      localStorage.setItem(
          'user Data',
          JSON.stringify(
              localStorage.setItem(
                  'users',
                  JSON.stringify([
                      { mobileNo: '7204975671', mPin: '9036' },
                  ])
              )
          )
      );
  }
  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNo: number = e.target.mobileNo.value;
    const newMPin: number = e.target.mpin.value;
    const confirmMpin: number = e.target.confirmMPin.value;

    const userData = { mobileNo, mPin: newMPin };

    const previousData: usersType[] = JSON.parse(
        localStorage.getItem('users') || '[]'
    );

    console.log('userData', previousData);
    console.log('userData', { mobileNo, newMPin });
    if (previousData.length > 0 && mobileNo) {
        const mappedUser = previousData.map((user) => {
            if (user.mobileNo === mobileNo) {
                return 'user';
            }
           
            return 'no user';
        });

        if (newMPin === confirmMpin) {
            if (mappedUser.includes('user')) {
                toast('user already exist');
            } else if (mappedUser.includes('no user')) {
                previousData.push(userData);
                sessionStorage.setItem('signUpSuccess', 'true');
                navigate('/');

                localStorage.setItem(JSON.stringify(mobileNo), '[]');
                window.location.reload();
            }
        } else {
            toast('MPin does not match');
        }

        console.log('pre', previousData);
        localStorage.setItem('users', JSON.stringify(previousData));
    } else if ((previousData.length = 0 && mobileNo)) {
    }
};


  function togglepswrd() {
      setPswrd(!pswrd)

  }
  function toggleTab(id: number) {
    setTab(id)
}

    const notify = () =>
    {
        toast.success('✔ Wow so easy!') 
           
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
              <form className='form'onSubmit={signUpHandler}>
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
                  <div className='box'><input type="text" name= 'mobileNo' placeholder='Enter Mobile Number' className='input'/></div>
                  <div className='box1'><input type="password" name="mpin" placeholder='Enter 4 digit MPin' className='input'/></div>
                  <div className='psswrd1'>
                 
                      {
                          pswrd?
                          <>
                          <input type="password" placeholder='Re-Enter Enter 4 digit MPin' className='input' name="confirmMPin"/>
                          <img src={require("../../asset/Image/hide-icon.jpg")} alt="" className='hide-eye' onClick={togglepswrd}/>
                          </>
                          :
                          <>
                          <input type="text" placeholder='Re-Enter Enter 4 digit MPin' className='input' name="confirmMPin"/>
                          <img src={require("../../asset/Image/eye_on.png")} alt="" className='eye' onClick={togglepswrd}/>
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
  )
}

export default Signup