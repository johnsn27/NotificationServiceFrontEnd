import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackClear.css';
import Button from '../Button/Button'

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
      <div className="back-clear-buttons">
        <div className="back-button">
          <Button type="primary" tab-index="1" className="Button" onClick={this.toggleBack} text="Back">
          </Button>
        </div>
        <div className="clear-button">
          <Button type="primary" tab-index="1" className="Button" onClick={onClick} text="Clear">
          </Button>
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
