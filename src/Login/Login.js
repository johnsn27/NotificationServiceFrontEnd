import React, { Component } from 'react';
import Btn from '@bbc/igm-btn';
import '@bbc/igm-btn/dist/Btn.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <label htmlFor="user-id">Enter user ID: </label>
        <input id="user-id"/>
        <div className="login-button">
          <Btn type="primary" tab-index="1" className="Button" onClick={() => {
            localStorage.setItem("userId", document.getElementById("user-id").value)
            window.location.href = '/home';
          }}>
            <span>Login</span>
          </Btn>
        </div>
      </div >
    );
  }
}

export default Login;
