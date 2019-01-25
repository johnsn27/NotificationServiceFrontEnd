import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Test.css';
import '@bbc/igm-btn/dist/Btn.css';
import CustomStickyBar from './CustomStickyBar/CustomStickyBar.js';
import '@bbc/igm-sticky-bar/dist/StickyBar.css';
import Login from './Login';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import ViewRoom from './ViewRoom';
import BackClear from './BackClear';
import SearchRoom from './SearchRoom';


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
    let rightSide = <ViewRoom />
    if (this.state.DisplaySearchRoom) {
      rightSide = <SearchRoom />
    }
    return this.state.DisplayLogin
      ? <Login />
      : <div className="App">
        <header className="App-header"></header>
        <div className="pageContent">
          <CustomStickyBar id="ViewRoom" className="StickyBar" text="View Room"></CustomStickyBar>
          <div className="pageContentBelowSticky">
            <div className="horizontal">
              <div className="leftSide">
                <LeftSideBar search={this.search.bind(this)}/>
              </div>
              <div className="rightSide">
                {rightSide}
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
  DisplayViewRoom: PropTypes.bool,
  DisplaySearchRoom: PropTypes.bool,
};

Test.defaultProps = {
  DisplayBack: false,
  DisplayViewRoom: false,
  DisplaySearchRoom: false,
}

export default Test;
