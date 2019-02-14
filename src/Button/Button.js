import React from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn'
import '@bbc/igm-btn/dist/Btn.css';
import './Button.css'

function Button({ type, tabIndex, className, onClick, text }) {
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

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button;
