import { React } from "react";
import { useAppContext } from "../../context";
import "./AddRecipent.css";
import { useNavigate } from "react-router-dom";

import upload from "./assets/icon.svg";
import doc from "./assets/doc.png";
// import frame from "./assets/upload.svg";

const AddRecipent = () => {
    const { handleSelectFile, selectFile, uploadFile, shortenFileName } =
      useAppContext();
    const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <h3>Add Recipent</h3>
        <hr />
      </div>
      <div className="recipent-container">
        {/* <div> */}
        <div className="upload">
          <h5>Upload Files</h5>
          {/* <img src={frame} alt="" /> */}
          <div className="upload-frame">
            <img src={upload} alt="upload" />
            <h5>Drag and Drop files here</h5>
            <p>File Supported CSV and PDFs files</p>
            <div className="upload-container">
              <input
                type="file"
                name="file"
                ref={selectFile}
                hidden
                onChange={handleSelectFile}
              />
              <button onClick={handleSelectFile}>Browse</button>
              <p>Maximum size: 10mb</p>
            </div>
          </div>
        </div>
        {uploadFile.name === undefined ? (
          ""
        ) : (
          <>
            <div className="component">
              <div className="doc">
                <img src={doc} alt="doc" />
              </div>
              <div className="comp-name">
                <p>{shortenFileName(uploadFile.name)}</p>
                <p>Size: {uploadFile.size}kb</p>
              </div>
              <button onClick={() => navigate("/recipent-list")}>
                Proceed
              </button>
            </div>
          </>
        )}
        {/* </div> */}
      </div>
    </>
  );
};

export default AddRecipent;
