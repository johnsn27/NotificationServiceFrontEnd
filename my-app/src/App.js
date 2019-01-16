import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';
import Dropdown from '@bbc/igm-dropdown-select'

function onClick() {
  console.log('onclick');
  var element = document.getElementsByClassName("css-xp4uvy select__single-value");
  console.log(element[0].innerHTML);

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
        </header>
        <div className="Dropdown">
          <Dropdown
            id= "DropDown"
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
            getOptionValue={option => option.value}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};
export default App;
