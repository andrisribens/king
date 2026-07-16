import React, { useEffect, useState } from 'react';
import logo from '../images/ball.svg';

function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        compact ? 'site-header site-header--compact' : 'site-header'
      }
    >
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
