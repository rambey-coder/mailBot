import React from "react";
import "./ComposeMessage.css";

const ComposeMessage = () => {
  return (
    <div className="message-container">
      <div className="header">
        <h3>Compose Message</h3>
        <hr />
      </div>

      <div className="message-content">
        <div className="compose">
          <h4>New Message</h4>
          <div className="compose-container">
            <div>
              <p>From:</p>
              <input type="text" placeholder="loremessan@mail.co" />
            </div>
            <hr />
            <div>
              <p>Subject:</p>
              <input type="email" placeholder="Lorem Ipsum Dolo" />
            </div>
            <hr />
            <textarea placeholder="Lorem...."></textarea>
          </div>
          <button>Generate Email Variant</button>
        </div>
      </div>
    </div>
  );
};

export default ComposeMessage;
