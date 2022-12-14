import React from 'react'
import '../header/header.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  // const navigate = useNavigate()
  const navigate = useNavigate()

  const logoutFunc = () => {

    localStorage.setItem("auth","false")

      navigate("/")

  }
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
            <div className="dropdown">
            <img src={require("../../asset/Image/profile.png")} alt="icon" />
            <div className="dropdown">
              <div className="dropdown-content">
                <div className="change-pass">
                <p>Change  Password</p>
                <img src={require("../../asset/Image/ic_pass.png")} alt="" />
                </div>
                <div className="sign-out" onClick={logoutFunc}>
                  <p>Sign Out</p>
                  <img src={require("../../asset/Image/712391-200.png")} alt="" />
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mobileHeader">
        <div className="head">
          
          <div className="passManager">
            <img
              src={require("../../asset/Image/burger_menu.png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              src={require("../../asset/Image/PASS MANAGER.png")}
              alt="icon"
              className="iconsImg"
            />
          </div>
          <div className="profileMobile">
            <img
              src={require("../../asset/Image/search (2).png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              src={require("../../asset/Image/sync_icn.png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              src={require("../../asset/Image/profile (2).png")}
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