import React from 'react';
import { scrollToAnchor } from '../utils/ScrollToAnchor';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="main-nav">
      <img src="gepakt-en-gezakt/logo.png" alt="main-logo" />
      <div className="nav-items">
        <a href="#section-1" onClick={(e) => scrollToAnchor(e, 'section-1')} className="nav-item">gepakt en gezakt</a>
        <a href="#section-2" onClick={(e) => scrollToAnchor(e, 'section-2')} className="nav-item">'t proces</a>
        <a href="#" className="nav-item">eieren of joeng</a>
        <a href="#" className="nav-item">zitzak</a>
        <a href="#" className="nav-item">kussen</a>
      </div>
    </nav>
  )
}

export default NavBar;
