import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h3>Verify Email</h3>
        <hr />
      </div>

      <div className="home-content">
        <h2>Add a valid Email</h2>
        <p>
          Reply to email conversations, respond to Survey feedback or add email
          to existing address
        </p>

        <form className="form-container">
          <input type="text" />
          <input type="submit" value="Continue" />
          <p className="err-msg">Please enter a valid email</p>
        </form>
      </div>
    </div>
  );
}

export default Home