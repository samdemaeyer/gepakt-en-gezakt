import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { isOpen: false };
  }

  scrollToAnchor = (e, id, offset = 0) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'auto' /*block: 'end',  inline: 'nearest'*/ });
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <nav className={`main-nav ${this.state.isOpen ? 'is-open' : ''}`} id="nav-bar">
        <a href="#section-1" onClick={(e) => this.scrollToAnchor(e, 'section-1')}>
          <img src="/gepakt-en-gezakt/logo.png" alt="main-logo" className="main-logo" />
        </a>
        <ul className="nav-items">
          <li>
            <a href="#section-1" onClick={(e) => this.scrollToAnchor(e, 'section-1')} className="nav-item">
              De situatie
            </a>
          </li>
          <li>
            <a href="#section-2" onClick={(e) => this.scrollToAnchor(e, 'section-2')} className="nav-item">
              Gepakt en Gezakt
            </a>
          </li>
          <li>
            <a href="#section-3" onClick={(e) => this.scrollToAnchor(e, 'section-3')} className="nav-item">
              'T proces
            </a>
          </li>
          <li>
            <a href="#section-4" onClick={(e) => this.scrollToAnchor(e, 'section-4')} className="nav-item">
              Aanbod
            </a>
          </li>
        </ul>
        <button type="button" className="menu-toggle" onClick={(e) => this.setState({ isOpen: !this.state.isOpen })}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>
    );
  }
}

export default NavBar;
