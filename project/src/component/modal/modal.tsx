import "./modal.css";

const Modal = () => {
  
  const modalHandler = (event: any) => {
    event.preventDefault();
    const url = event.target.url.value;
    const siteName = event.target.siteName.value;
    const folder = event.target.folder.value;
    const userName = event.target.userName.value;
    const sitePassword = event.target.sitePassword.value;
    const notes = event.target.notes.value;

    const modalData = {
      url,
      siteName,
      folder,
      userName,
      sitePassword,
      notes,
    };
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const oldData = JSON.parse(localStorage.getItem(currentUser) || "[]");
    oldData.push(modalData);
    localStorage.setItem(currentUser, JSON.stringify(oldData));
  };
  return (
    <div>
      <div className="modalItem">
        <div className="addSiteModal">Add data</div>
        <div className="dashBoardForm">
          <form action="" className="modalForm" onSubmit={modalHandler}>
            <div className="url">
              <div className="classLabel">URL</div>
              <input type="text" className="inputStyle" name="url" required/>
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input type="text" className="inputStyle" name="siteName" required/>
              </div>

              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input type="text" className="inputStyle" name="folder" required/>
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user Name</div>
                <input type="text" className="inputStyle" name="userName" required/>
              </div>

              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input type="text" className="inputStyle" name="sitePassword" required/>
                <img
                  src={require("../../asset/Image/eye_on.png")}
                  alt="eye"
                  className="passwordEye"
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea className="inputStyle" name="notes" />
            </div>

            <div className="modalButton">
              <button className="modalButtons button2 " type="reset">
                Reset
              </button>
              <button className="modalButtons button2" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;