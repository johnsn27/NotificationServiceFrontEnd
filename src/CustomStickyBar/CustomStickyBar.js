import React from 'react';
import PropTypes from 'prop-types';
import StickyBar from '@bbc/igm-sticky-bar'
import './CustomStickyBar.css'
import '@bbc/igm-sticky-bar/dist/StickyBar.css';

function CustomStickyBar({ id, className, text }) {
  return (
    <StickyBar id={id} className={className}>
      <div className="sticky-bar-contents">
        <div className="sticky-bar-contents-title">
          <h1>{text}</h1>
        </div>
      </div>
    </StickyBar>
  );
}

CustomStickyBar.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default CustomStickyBar;
