import React from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn'
import '@bbc/igm-btn/dist/Btn.css';
import './LeftSideBarButton.css'

function LeftSideBarButton({ type, tabIndex, className, onClick, text }) {
  return (
    <Btn
      type={type}
      tab-index={tabIndex}
      className={className}
      onClick={onClick}
    >
      <span>{text}</span>
    </Btn>
  );
}

LeftSideBarButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default LeftSideBarButton;
