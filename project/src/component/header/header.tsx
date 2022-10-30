import React from 'react'
import '../header/header.css'

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="dashBoardImage">
          <img src={require("../../asset/Image/pass_logo.png")} alt="icon" />
        </div>
        <div className="dashBoardIcons">
          <div className="sync">
            <img src={require("../../asset/Image/sync.png")} alt="icon" />
          </div>
          <div className="profile">
            <img src={require("../../asset/Image/profile.png")} alt="icon" />
          </div>
        </div>
      </div>

      <div className="mobileHeader">
        <div className="head">
          <div className="passManager">
            <img
              // src={require("../../assets/icons/burger_Menu.png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              // src={require("../../assets/icons/PASS MANAGER.png")}
              alt="icon"
              className="iconsImg"
            />
          </div>
          <div className="profileMobile">
            <img
              // src={require("../../assets/icons/search (2).png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              // src={require("../../assets/icons/sync_icn.png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              // src={require("../../assets/icons/profile (2).png")}
              alt="icon"
              className="iconsImg"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Header;