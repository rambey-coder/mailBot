import React from 'react'
import "./Home.css"
import { useAppContext } from '../../context';

const Home = () => {
  const { getSenderEmail, handleSenderEmail, handleNavigate, error } = useAppContext();
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

        <form className="form-container" onSubmit={handleNavigate}>
          <input
            type="text"
            value={getSenderEmail}
            onChange={handleSenderEmail}
          />
          <input type="submit" value="Continue" />
          {error ? <p className="err-msg">Please enter a valid email</p> : ''}
        </form>
      </div>
    </div>
  );
}

export default Home