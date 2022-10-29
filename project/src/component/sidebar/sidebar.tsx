import React from 'react'
import '../sidebar/sidebar.css'

function Sidebar() {
  return (
    <div className='block'>
      {/* <div className='brimg'> */}
        <img src={require("../../asset/Image/burger_menu.png")} alt="" className='burger' />
        {/* </div> */}
     
        <img src={require("../../asset/Image/home_icn.png")} alt="" className='home' />
        
    </div>
  )
}

export default Sidebar