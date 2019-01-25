import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ViewRoom.css';
import './Test.css';
import '@bbc/igm-btn/dist/Btn.css';
import CustomStickyBar from './CustomStickyBar/CustomStickyBar.js';
import '@bbc/igm-sticky-bar/dist/StickyBar.css';
import Login from './Login';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import ViewRoom from './ViewRoom';
import BackClear from './BackClear';


class Test extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = { DisplayLogin: props.DisplayLogin };
  }

  toggleBack() {
    this.setState({ DisplayLogin: !this.state.DisplayLogin });
  }

  render() {
    return this.state.DisplayLogin
      ? <Login />
      : <div className="App">
        <header className="App-header"></header>
        <div className="pageContent">
          <CustomStickyBar id="ViewRoom" className="StickyBar" text="View Room"></CustomStickyBar>
          <div className="pageContentBelowSticky">
            <div className="horizontal">
              <div className="leftSide">
                <LeftSideBar />
              </div>
              <div className="rightSide">
                <ViewRoom />
              </div>
            </div>
            <div className="backClearButtonsContainer">
              <BackClear />
            </div>
          </div>
        </div>
      </div>
  }
}

Test.propTypes = {
  DisplayBack: PropTypes.bool,
};

Test.defaultProps = {
  DisplayBack: false,
}

export default Test;
