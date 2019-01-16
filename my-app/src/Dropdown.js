import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';
import Dropdown from '@bbc/igm-dropdown-select'

function onClick() {
  console.log('onclick');
  console.log(Dropdown.getOptionValue());
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didSearchFail: false,
    }
  };
  render() {
    const values = this.props;
    const { didSearchFail } = this.state;
    return (
      <div className="Dropdown">
        <Dropdown
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
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};
export default App;
