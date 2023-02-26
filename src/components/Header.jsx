import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <aside className="title">
        <h1>box-shadow CSS Generator</h1>
      </aside>

      <aside className="profile">
        <div className="profile-container">
          <div className="profile-photo">
            <img src="/img/suit.jpg" alt="shahir dev profile" />
          </div>

          <div className="profile-name-username">
            <p>Simon</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Header;
