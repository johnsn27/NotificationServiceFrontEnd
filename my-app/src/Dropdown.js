import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Dropdown from '@bbc/igm-dropdown-select'

class RoomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didSearchFail: false,
    }
  };
  render() {
    const {
      name, options, isSearchable, isDisabled, isLoading, placeholder, isRtl
    } = this.props;
    return (
      <div className="Dropdown" >
        <Dropdown
          name={name}
          options={options}
          isSearchable={isSearchable}
          // isClearable
          isDisabled={isDisabled}
          isLoading={isLoading}
          placeholder={placeholder}
          isRtl={isRtl}
          getOptionValue={option => option.value}
        />
      </div>
    );
  }
}

RoomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  isSearchable: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRtl: PropTypes.bool.isRequired,
};
export default RoomSelect;
