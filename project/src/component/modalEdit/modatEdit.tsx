import "../modal/modal.css";
import { useState } from "react";

const ModalEdit = (props: any) => {
  const [edit, setEdit] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const displayData = JSON.parse(localStorage.getItem(currentUser) || "[]");
  console.log("displayData", displayData);
  const [value, setValue] = useState({
    url: "",
    siteName: "",
    folder: "",
    userName: "",
    sitePassword: "",
    notes: "",
  });

  const modalHandler = (e: any, i: any) => {
    e.preventDefault();
    const url = e.target.url.value;
    const siteName = e.target.siteName.value;
    const folder = e.target.folder.value;
    const userName = e.target.userName.value;
    const sitePassword = e.target.sitePassword.value;
    const notes = e.target.notes.value;

    const modalData = {
      url,
      siteName,
      folder,
      userName,
      sitePassword,
      notes,
    };

    // console.log("modalData", modalData);

    displayData[i] = modalData;
    console.log("displayData[i]", displayData[i]);
    localStorage.setItem(currentUser, JSON.stringify(displayData));
  };
  const editHandler = (e: any) => {
    setValue(e.target.value);
  };

  console.log("value", value);

  return (
    <div>
      <div className="modalItem">
        <div className="addSiteModal">Site Details</div>
        <div className="dashBoardForm">
          <form
            action=""
            className="modalForm"
            onSubmit={(e) => modalHandler(e, props.index)}
          >
            <div className="url">
              <div className="classLabel">URL</div>
              <input
                type="text"
                className="inputStyle"
                name="url"
                required
                onChange={editHandler}
                value={edit ? value.url : displayData[props.index].url}
              />
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="siteName"
                  required
                  onChange={editHandler}
                  value={
                    edit ? value.siteName : displayData[props.index].siteName
                  }
                />
              </div>

              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="folder"
                  onChange={editHandler}
                  value={edit ? value.folder : displayData[props.index].folder}
                />
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="userName"
                  onChange={editHandler}
                  value={
                    edit ? value.userName : displayData[props.index].userName
                  }
                />
              </div>

              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="sitePassword"
                  required
                  onChange={editHandler}
                  value={
                    edit
                      ? value.sitePassword
                      : displayData[props.index].sitePassword
                  }
                />
                <img
                  src={require("../../asset/Image/eye_on.png")}
                  alt="eye"
                  className="passwordEye"
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea
                className="inputStyle"
                name="notes"
                onChange={editHandler}
                value={edit ? value.notes : displayData[props.index].notes}
              />
            </div>

            <div className="modalButton">
              {props.edit1 ? (
                <div>
                  {!edit ? (
                    <button type="button" onClick={() => setEdit(true)} className="e-button">
                      click to Edit
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              {/* {!edit ? (
                <div>
                  {" "}
                  <button
                    className="modalButtons button2 "
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                ""
              )} */}

              {edit ? (
                <input type="submit" value="save" className="btnSubmit" />
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;