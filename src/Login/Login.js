import React, { Component } from 'react';
import Btn from '@bbc/igm-btn';
import '@bbc/igm-btn/dist/Btn.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="login-button">
          <Btn type="primary" tab-index="1" className="Button" onClick={() => window.location.href = '/home'}>
            <span>Login</span>
          </Btn>
        </div>
      </div >
    );
  }
}

export default Login;
