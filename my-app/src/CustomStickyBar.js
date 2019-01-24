import React, { Component } from 'react';
import './ViewRoom.css';
import PropTypes from 'prop-types';
import StickyBar from '@bbc/igm-sticky-bar'
import '@bbc/igm-sticky-bar/dist/StickyBar.css';

function CustomStickyBar({ id, className, text }) {
  return (
    <StickyBar id={id} className={className}>
      <div className="StickyBarContents">
        <div className="StickyBarContentsTitle">
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
