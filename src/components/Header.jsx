import React from 'react';
import banner from '../images/starwars_planets.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={ banner } alt="banner" />
      </div>
    );
  }
}

export default Header;
