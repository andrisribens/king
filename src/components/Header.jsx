import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/ball.svg';

function Header() {
  const [compact, setCompact] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCompact(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header" ref={headerRef}>
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
      <div
        className={
          compact
            ? 'site-header-bar site-header-bar--visible'
            : 'site-header-bar'
        }
        aria-hidden={!compact}
      >
        <span className="site-header-bar__title">King of The Beach</span>
      </div>
    </>
  );
}

export default Header;
