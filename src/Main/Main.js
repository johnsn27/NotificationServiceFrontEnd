import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import BackClear from '../BackClear/BackClear';
import CustomStickyBar from '../CustomStickyBar/CustomStickyBar';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ViewRoom from '../ViewRoom/ViewRoom';
import SearchRoom from '../SearchRoom/SearchRoom';
import WatchedRooms from '../WatchedRooms/WatchedRooms'
import HomePage from '../HomePage/HomePage';


class Test extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = {
      DisplayLogin: props.DisplayLogin,
      DisplayViewRoom: props.DisplayViewRoom,
      DisplaySearchRoom: props.DisplaySearchRoom,
      DisplayWatchRoom: props.DisplayWatchRoom,
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

  watch() {
    console.log('watch');
    this.setState({ DisplayWatchRoom: !this.state.DisplayWatchRoom});
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
    if (this.state.DisplayWatchRoom) {
      RightSide = <WatchedRooms />
      StickyTitle = "My Watched Rooms"
    }
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="page-content">
          <CustomStickyBar id={StickyTitle} className="sticky-bar" text={StickyTitle}></CustomStickyBar>
          <div className="page-content-below-sticky">
            <div className="left-right-content">
              <div className="left-side">
                <LeftSideBar search={this.search.bind(this)} watch={this.watch.bind(this)} />
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
  DisplayWatchRoom: PropTypes.bool,
  DisplayHomePage: PropTypes.bool,
};

Test.defaultProps = {
  DisplayBack: false,
  DisplayViewRoom: false,
  DisplaySearchRoom: false,
  DisplayWatchRoom: false,
  DisplayHomePage: false,
}

export default Test;
