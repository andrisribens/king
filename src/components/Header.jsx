import React from 'react';
import logo from '../images/ball.svg';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <img
          className="site-header__ball"
          src={logo}
          alt=""
          width={36}
          height={36}
        />
        <h1>King of The Beach</h1>
        <p>Tournament Schedule &amp; Scores</p>
      </div>
    </header>
  );
}

export default Header;
