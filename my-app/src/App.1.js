import React, { Component } from 'react';
import './App.css';
import Btn from './Btn';
import Dropdown from './Dropdown';

function onClick() {
  var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
  console.log(element);
  return element;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Button">
            <Btn
              type="link"
              tab-index="1"
              className="Button"
              onClick={onClick}
            >
              <span>Watch Room</span>
            </Btn>
          </div>
          <div className="Dropdown">
            <Dropdown
              name="nathan"
              options={[
                { value: 'Marie Curie', label: 'Marie Curie', description: '' },
                { value: 'Che Guevara', label: 'Che Guevara', description: '' },
                { value: 'Luther', label: 'Luther', description: '' },
              ]}
              isSearchable
              // isClearable
              isDisabled={false}
              isLoading={false}
              placeholder="Search for room"
              isRtl={false}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
