import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import BackClear from '../BackClear/BackClear';
import CustomStickyBar from '../CustomStickyBar/CustomStickyBar';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ViewRoom from '../ViewRoom/ViewRoom';
import SearchRoom from '../SearchRoom/SearchRoom';
import Login from '../Login/Login';
import WatchedRooms from '../WatchedRooms/WatchedRooms';
import HomePage from '../HomePage/HomePage';
import MeetingRooms from '../MeetingRooms/MeetingRooms';

const Content = () => {
  return (
    <Switch>
      <Route path='/view-room/:id' component={ViewRoom}/>
      <Route path='/search-room' component={SearchRoom}/>
      <Route path='/watched-rooms' component={WatchedRooms}/>
      <Route path='/meeting-rooms' component={MeetingRooms}/>
      <Route path='/home' component={HomePage}/>
    </Switch>
  )
}

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='*' component={Test}/>
      </Switch>
    )
  }
}

class Test extends Component {
  render() {
     const pageTitle = () => {
      switch(this.props.location.pathname){
        case `/view-room`:
          return 'View Room';
        case '/search-room':
          return 'Search Room';
        case '/watched-rooms':
          return 'My Watched Rooms';
        case '/home':
          return 'Welcome User';
        case '/meeting-rooms':
          return 'Meeting Rooms';
        default:
          return 'Notification Service';
      }
    }
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="page-content">
          <CustomStickyBar id={pageTitle()} className="sticky-bar" text={pageTitle()}></CustomStickyBar>
          <div className="page-content-below-sticky">
            <div className="left-right-content">
              <div className="left-side">
                <LeftSideBar />
              </div>
              <div className="right-side">
                <Content />
                <BackClear />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
