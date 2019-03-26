import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './BackClear.css';
import Btn from '@bbc/igm-btn';
import HomePage from '../HomePage/HomePage';

function onClick() {
  var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
  console.log(element);
  return element;
}


class BackClear extends Component {
  render() {
    return (
      <div className="back-clear-buttons-container">
        <div className="back-clear-buttons">
          <div className="back-button">
            <Btn type="primary" tab-index="1" className="Button" onClick={(this.props.history.goBack)}>
              <span>Back</span>
            </Btn>
          </div>
          <div className="clear-button">
            <Btn type="primary" tab-index="1" className="Button" onClick={() => window.location.href ='/home'}>
              <span>Home</span>
            </Btn>
          </div>
        </div>
      </div>
    );
  }
}

BackClear.propTypes = {
  DisplayBack: PropTypes.bool,
};

BackClear.defaultProps = {
  DisplayBack: false,
}

export default withRouter(BackClear);
