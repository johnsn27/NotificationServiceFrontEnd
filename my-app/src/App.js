import React, { Component } from 'react';
import './App.css';
import Btn from '@bbc/igm-btn';
import Dropdown from '@bbc/igm-dropdown-select'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="    ">
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
