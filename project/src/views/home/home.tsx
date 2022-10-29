import React from 'react'
import Header from '../../component/header/header'
import Sidebar from '../../component/sidebar/sidebar'
import '../home/home.css'

function Home() {
  return (
    <div className='main-box'>
     
     
      <Sidebar/>
      <Header/>
      <div className='box-rect'>
        {/* <div className='sites'>Sites</div> */}
      </div>
    </div>
   
    

  )
}

export default Home