import React from "react";
import "./Sidebar.css";
import check from "./assets/check.svg";
import dot from "./assets/dot.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sideline"></div>
      <div className="sidebar-content">
        <h1>Mailbot</h1>

        <div className="progress-bar">
          <div className="progress-container">
            <div className="bar-container">
              <div className="checked">
                <img src={check} alt="check" />
              </div>
              <div className="line"></div>
            </div>
            <div>
              <h4>Verify Email</h4>
              <p>Add an email to continue</p>
            </div>
          </div>

          <div className="progress-container">
            <div className="bar-container">
              <div className="unchecked">
                <img src={dot} alt="dot" />
              </div>
              <div className="line"></div>
            </div>
            <div>
              <h4>Add Recipents</h4>
              <p>upload CSV or PDF file for next step</p>
            </div>
          </div>

          <div className="progress-container">
            <div className="bar-container">
              <div className="unchecked">
                <img src={dot} alt="dot" />
              </div>
              <div className="line"></div>
            </div>
            <div>
              <h4>Compose Message</h4>
              <p>compose message to continue</p>
            </div>
          </div>

          <div className="progress-container">
            <div className="bar-container">
              <div className="unchecked">
                <img src={dot} alt="dot" />
              </div>
            </div>
            <div>
              <h4>Send Message</h4>
              <p>Send bulk message to all recipents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
