import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import BackClear from '../BackClear/BackClear';
import CustomStickyBar from '../CustomStickyBar/CustomStickyBar';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ViewRoom from '../ViewRoom/ViewRoom';
import SearchRoom from '../SearchRoom/SearchRoom';
import HomePage from '../HomePage/HomePage';


class Test extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = {
      DisplayLogin: props.DisplayLogin,
      DisplayViewRoom: props.DisplayViewRoom,
      DisplaySearchRoom: props.DisplaySearchRoom,
      DisplayHomePage: props.DisplayHomePage
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
    let RightSide = <HomePage />;
    let StickyTitle = "Welcome User";
    if (this.state.DisplaySearchRoom) {
      RightSide = <SearchRoom />;
      StickyTitle = "Search Room";
    }
    else if (this.state.DisplayViewRoom) {
        RightSide = <ViewRoom />;
        StickyTitle = "View Room";
    }
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="page-content">
          <CustomStickyBar id={StickyTitle} className="sticky-bar" text={StickyTitle}></CustomStickyBar>
          <div className="page-content-below-sticky">
            <div className="left-right-content">
              <div className="left-side">
                <LeftSideBar search={this.search.bind(this)} />
              </div>
              <div className="right-side">
                {RightSide}
                <BackClear />
              </div>
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
  DisplayHomePage: PropTypes.bool,
};

Test.defaultProps = {
  DisplayBack: false,
  DisplayViewRoom: false,
  DisplaySearchRoom: false,
  DisplayHomePage: false,
}

export default Test;
