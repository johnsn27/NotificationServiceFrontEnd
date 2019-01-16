import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didSearchFail: false,
    }
  };
  render() {
    const {
      type, className, onClick
    } = this.props;
    return (
      <div className="Button">
        <Btn
          type={type}
          className={className}
          onClick={onClick}
        >
          <span>Watch Room</span>
        </Btn>
      </div>
    );
  }
}

Btn.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
