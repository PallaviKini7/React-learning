import "./sites.css";
import { useState } from "react";
import Modal from "../modal/modal";
import ModalEdit from "../modalEdit/modatEdit";
import Card from "../card/card";

const Sites = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [modalEdit, setModalEdit] = useState(0);
  const [search, setSearch] = useState("");

  const childToParent = (data: any, i: any) => {
    setEdit(data);
    setModalEdit(i);
  };
  console.log("i", modalEdit);
  const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");

  const getTerm = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="siteContainer">
        <div className="marginContainer">
          <img src={require("../../asset/Image/add_btn.png")} alt="" className='add-btn-mobile' onClick={() => {
            setModal(true);
          }} />
          <div className="sites">Sites</div>
          <div className="searchBar">
            <div className="search">
              <input
                type="text"
                placeholder="search"
                className="searchInput"
                name="search"
                onChange={getTerm}
              />
              <img
                src={require("../../asset/Image/search.png")}
                alt="icon"
                className="searchImage"
              />
            </div>
            <div className="plus">
              <img
                src={require("../../asset/Image/add_btn.png")}
                alt="icon"
                onClick={() => {
                  setModal(true);
                }}
              />
            </div>
          </div>
          
        </div>
        <div className="media">Social Media
        <div className="mediaCount">
                  {siteData.length < 10
                    ? `0${siteData.length}`
                    : siteData.length}
                </div></div>
        {JSON.stringify(siteData) === "[]" ? (
          <div className="center">
            <div className="addSiteContainer">
              <div className="addSites">
                Please Click on the “+” symbol to add sites
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* <div className="socialMediaDesktop"> */}
              {/* <div className="socialMedia"> */}
                {/* <div className="media">Social Media</div> */}
                {/* <div className="mediaCount">
                  {siteData.length < 10
                    ? `0${siteData.length}`
                    : siteData.length}
                </div> */}
              {/* </div> */}
            {/* </div> */}

            <div className="socialMediaMobile">
              <div className="socialMedia">
                <div className="sites_1">Sites</div>
                <div className="mobileMedia">
                  <div className="media">Social Media</div>
                  <div className="mediaCount">
                    {siteData.length < 10
                      ? `0${siteData.length}`
                      : siteData.length}
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Card childToParent={childToParent} search={search} />
            </div>
            <div className="addButton">
              <img
                src={require("../../asset/Image/add_btn.png")}
                alt="icon"
                onClick={() => {
                  setModal(true);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {modal ? (
        <div className="modal">
          <div className="overlay">
            <div className="modelInfo">
              <div className="modalContent">
                <Modal />
                <button className="close-modal">
                  <img
                    src={require("../../asset/Image/close_btn.png")}
                    alt="drop"
                    className="closeImg"
                    onClick={() => {
                      setModal(false);
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {edit ? (
        <div>
          <div className="modal">
            <div className="overlay">
              <div className="modelInfo">
                <div className="modalContent">
                  <ModalEdit
                    index={modalEdit}
                    edit1={edit}
                    setEdit1={setEdit}
                  />
                  <button className="close-modal">
                    <img
                      src={require("../../asset/Image/close_btn.png")}
                      alt="drop"
                      className="closeImg"
                      onClick={() => {
                        setEdit(false);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sites;