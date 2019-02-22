import React from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn'
import '@bbc/igm-btn/dist/Btn.css';
import './LeftSideBarButton.css'

function LeftSideBarButton({ type, tabIndex, className, link, text }) {
  return (
    <Btn
      type={type}
      tab-index={tabIndex}
      className={className}
      onClick={() => link ? window.location.href = link : console.log('page not yet implemented')}
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
