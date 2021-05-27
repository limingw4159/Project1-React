import React from "react";

const Header = () => (
  <header>
    <nav className="nav__left">
      Joe <span>Wong</span>
    </nav>
    <nav className="nav__right">
      <ul>
        <li className="current">Home</li>
        <li>Resume</li>
        <li>Service</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <i className="fas fa-list"></i>
    </nav>

    <div className="clearfix"></div>
  </header>
);
export default Header;
