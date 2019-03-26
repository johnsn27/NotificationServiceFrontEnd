import React from 'react';
import PropTypes from 'prop-types';
import StickyBar from '@bbc/igm-sticky-bar'
import './CustomStickyBar.css'
import '@bbc/igm-sticky-bar/dist/StickyBar.css';
import Btn from '@bbc/igm-btn'

function CustomStickyBar({ id, className, text }) {
  return (
    <StickyBar id={id} className={className}>
      <div id="container" className="container">
        <div id="text" className="text">
          <h1>{text}</h1>
        </div>
        <div id="logout" className="logout">
          <Btn className="logout-button" onClick={() => { window.location.href = '/' }}>
            Logout
        </Btn>
        </div>
      </div>
    </StickyBar >
  );
}

CustomStickyBar.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default CustomStickyBar;
