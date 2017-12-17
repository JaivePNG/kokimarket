import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div className="head">
          <h1>KOKI MARKET.COM</h1>
        </div>
      </div>
    );
  }
}

export default Header;