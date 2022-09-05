import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="nav-header">
        <di className="left-header">
          <img src="../assets/images/planet.png" alt="space-logo"/>
          <h1>Space Traveler's Hub</h1>
        </div>
        <div className="right-header">
          <ul>
            <li>ROCKETS</li>
            <li>MISSIONS</li>
            <li>MY PROFILE</li>
          </ul>
        </div>
      </div>
    </>
  );
};
