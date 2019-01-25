import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ViewRoom.css';
import Btn from '@bbc/igm-btn';
import '@bbc/igm-btn/dist/Btn.css';
import '@bbc/igm-sticky-bar/dist/StickyBar.css';

function onClick() {
  var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
  console.log(element);
  return element;
}


class BackClear extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = { DisplayLogin: props.DisplayLogin };
  }

  toggleBack() {
    this.setState({ DisplayLogin: !this.state.DisplayLogin });
  }

  render() {
    return (
      <div className="backClearButtons">
        <div className="backButton">
          <Btn
            type="primary"
            tab-index="1"
            className="Button"
            onClick={this.toggleBack}
          >
            <span>Back</span>
          </Btn>
        </div>
        <div className="clearButton">
          <Btn
            type="primary"
            tab-index="1"
            className="Button"
            onClick={onClick}
          >
            <span>Clear</span>
          </Btn>
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

export default BackClear;