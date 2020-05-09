import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="main-nav">
      <img src="/logo.png" alt="main-logo" />
      <div className="nav-items">
        <a href="#" className="nav-item">gepakt en gezakt</a>
        <a href="#" className="nav-item">'t proces</a>
        <a href="#" className="nav-item">eieren of joeng</a>
        <a href="#" className="nav-item">zitzak</a>
        <a href="#" className="nav-item">kussen</a>
      </div>
    </nav>
  )
}

export default NavBar;
