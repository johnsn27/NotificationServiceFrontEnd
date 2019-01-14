import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from '@bbc/igm-btn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="buttonDiv">
          <Btn
            type="link"
            tab-index="1"
            className="Button"
          >
          <span>Watch Room</span>
        </Btn>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
