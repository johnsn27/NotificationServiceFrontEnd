import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';
import '@bbc/igm-btn/dist/Btn.css';
import '@bbc/igm-sticky-bar/dist/StickyBar.css';
import Test from './Test';

class Login extends Component {
  constructor(props) {
    super();
    this.toggleViewRoom = this.toggleViewRoom.bind(this);
    this.state = { DisplayViewRoom: props.DisplayViewRoom };
  }

  toggleViewRoom() {
    this.setState({ DisplayViewRoom: !this.state.DisplayViewRoom });
  }

  render() {
    return this.state.DisplayViewRoom
      ? <Test />
      : <div className="App">
        <header className="App-header"></header>
        <div className="loginButton">
          <Btn
            type="primary"
            tab-index="1"
            className="Button"
            onClick={this.toggleViewRoom}
          >
            <span>Login</span>
          </Btn>
        </div>
      </div >
  }
}

Login.propTypes = {
  DisplayViewRoom: PropTypes.bool,
};

Login.defaultProps = {
  DisplayViewRoom: false,
}

export default Login;
