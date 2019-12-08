import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super();
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }

  handleScrollTo(className) {
    document
      .getElementsByClassName(className)[0]
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <Flexbox
        justifyContent="space-between"
        alignItems="center"
        style={{
          color: '#000',
          position: 'fixed',
          bottom: '0px',
          backgroundColor: '#F5F5F5',
          height: '50px',
          width: '100%',
        }}
      >
        <ul className="navbar">
          <li
            className="navbar__item noHighlight"
            onClick={() => this.handleScrollTo('mobileHomeView__container')}
          >
            <i
              className="fa fa-home"
              aria-hidden="true"
              style={{ fontSize: '33px' }}
            />
          </li>
          <li
            className="navbar__item noHighlight"
            onClick={() => this.handleScrollTo('workViewContainer')}
          >
            <i
              className="fa fa-code"
              aria-hidden="true"
              style={{ fontSize: '30px' }}
            />
          </li>
          <li
            className="navbar__item noHighlight"
            onClick={() => this.handleScrollTo('aboutMeView')}
          >
            <i
              className="fa fa-address-card-o"
              aria-hidden="true"
              style={{ fontSize: '28px' }}
            />
          </li>
          <li
            className="navbar__item noHighlight"
          >
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </Flexbox>
    );
  }
}

export default Navbar;
