import React from 'react';
import logo from '../images/ball.svg';

function ResultsBrandHeader({ exporting = false }) {
  return (
    <div
      className="results-brand-header"
      hidden={!exporting}
      style={{ display: exporting ? 'block' : 'none' }}
      aria-hidden={!exporting}
    >
      <img
        className="results-brand-header__ball"
        src={logo}
        alt=""
        width={28}
        height={28}
      />
      <h2 className="results-brand-header__title">King of The Beach</h2>
      <p className="results-brand-header__subtitle">kingofthebeach.me</p>
    </div>
  );
}

export default ResultsBrandHeader;
