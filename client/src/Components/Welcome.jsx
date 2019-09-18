import React from 'react';

const Welcome = props => (
  <div className="welcome">
    <div className="welcome-overlay"></div>
    <div className="welcome-greeting">
      <h1>welcome to e-trial</h1>
      <h3>your low budget solution to justice</h3>
    </div>
    <button className="welcome-begin-btn">begin discovery</button>
  </div>
);

export default Welcome;