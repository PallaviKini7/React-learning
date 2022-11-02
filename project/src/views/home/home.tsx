import React from 'react'
import Header from '../../component/header/header'
import Sidebar from '../../component/sidebar/sidebar'
import Sites from '../../component/sites/sites'
import '../home/home.css'

const Home = () => {

  
  return (
    <div>
      <div className="dashBoardContainer">
        <div className="sideBarMenu">
          <Sidebar />
        </div>

        <div className="dashBoardHeader">
         <Header/>
        </div>

        <div className="dashBoardSites">
          <Sites/>
          
        </div>
      </div>
    </div>
  )
}

export default Home