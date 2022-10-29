import React from 'react'
import '../header/header.css'

function Header() {
  return (
    <div className='horizontal'>
      <div className='smallhorizontal'>
      <img src={require("../../asset/Image/pass_logo.png")} alt="" className='passlogo' />
      <div className='small-images'>
        <img src={require("../../asset/Image/sync.png")} alt="" />
        <img src={require("../../asset/Image/profile.png")} alt="" />
      </div>

      </div>
     
    </div>
  )
}

export default Header