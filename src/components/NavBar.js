import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { isOpen: false };
  }

  scrollToAnchor = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    this.setState({ isOpen: false });
  }


  render() {
    return (
      <nav className={`main-nav ${this.state.isOpen ? 'is-open' : ''}`} id="nav-bar">
        <img src="/gepakt-en-gezakt/logo.png" alt="main-logo" className="main-logo" />
        <ul className="nav-items">
          <li>
            <a href="#section-1" onClick={(e) => this.scrollToAnchor(e, 'scroll-section-1')} className="nav-item">
              gepakt en gezakt
            </a>
          </li>
          <li>
            <a href="#section-2" onClick={(e) => this.scrollToAnchor(e, 'section-2')} className="nav-item">
              't proces
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              eieren of joeng
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              zitzak
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              kussen
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
