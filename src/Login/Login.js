import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';
import '@bbc/igm-btn/dist/Btn.css';
import Main from '../Main/Main';

class Login extends Component {
  constructor(props) {
    super();
    this.toggleHomePage = this.toggleHomePage.bind(this);
    this.state = { DisplayHomePage: props.DisplayHomePage };
  }

  toggleHomePage() {
    this.setState({ DisplayHomePage: !this.state.DisplayHomePage });
  }

  render() {
    return this.state.DisplayHomePage;
      ? <Main />
      : <div className="App">
        <header className="App-header"></header>
        <div className="login-button">
          <Btn type="primary" tab-index="1" className="Button" onClick={this.toggleHomePage}>
            <span>Login</span>
          </Btn>
        </div>
      </div >
  }
}

Login.propTypes = {
  DisplayHomePage: PropTypes.bool,
};

Login.defaultProps = {
  DisplayHomePage: false,
}

export default Login;
