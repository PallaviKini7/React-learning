import React from 'react'
import './sidebar.css'
  const Sidebar = () => {
    return (
      <div>
        <div className="">
          <div className="logoBurger">
            <img src={require('../../asset/Image/burger_menu.png')} alt="icon"  className='brger'/>
          </div>
          <div className="homeIcn">
            <img src={require('../../asset/Image/home_icn.png')} alt="icon" />
          </div>
          <div className="round"></div>
        </div>
      </div>
    )
  }


export default Sidebar