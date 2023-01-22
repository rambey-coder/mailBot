import React from "react";
import "./AddRecipent.css";
// import { useNavigate } from "react-router-dom";

const RecipentList = () => {
    // const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <h3>Add Recipent</h3>
        <hr />
      </div>

      <div className="list-container">
        <div>
          <p>Recipent Lists:</p>
          <div className="lists">
            <div className="recipent-list">
              <div className="mail-list">No mails to show</div>
            </div>
          </div>
                  <button>Proceed</button>
                  {/* <button onClick={() => navigate(-1)}>Upload Another File</button> */}
        </div>
      </div>
    </>
  );
};

export default RecipentList;
