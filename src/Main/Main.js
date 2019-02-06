import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import BackClear from '../BackClear/BackClear';
import CustomStickyBar from '../CustomStickyBar/CustomStickyBar';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ViewRoom from '../ViewRoom/ViewRoom';
import SearchRoom from '../SearchRoom/SearchRoom';


class Test extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = {
      DisplayLogin: props.DisplayLogin,
      DisplayViewRoom: props.DisplayViewRoom,
      DisplaySearchRoom: props.DisplaySearchRoom
    };
  }

  toggleBack() {
    this.setState({ DisplayLogin: !this.state.DisplayLogin });
  }

  search() {
    console.log('search');
    this.setState({ DisplaySearchRoom: !this.state.DisplaySearchRoom });
  }

  render() {
    let RightSide = <ViewRoom />
    if (this.state.DisplaySearchRoom) {
      RightSide = <SearchRoom />
    }
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="page-content">
          <CustomStickyBar id="ViewRoom" className="sticky-bar" text="View Room"></CustomStickyBar>
          <div className="page-content-below-sticky">
            <div className="left-right-content">
              <div className="left-side">
                <LeftSideBar search={this.search.bind(this)} />
              </div>
              <div className="right-side">
                {RightSide}
              </div>
            </div>
            <div className="back-clear-buttons-container">
              <BackClear />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Test.propTypes = {
  DisplayBack: PropTypes.bool,
  DisplayViewRoom: PropTypes.bool,
  DisplaySearchRoom: PropTypes.bool,
};

Test.defaultProps = {
  DisplayBack: false,
  DisplayViewRoom: false,
  DisplaySearchRoom: false,
}

export default Test;
