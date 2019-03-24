import React, { Component} from 'react';
import PropTypes from 'prop-types';
import LeftSideBarButton from './LeftSideBarButtons/LeftSideBarButton.js';
import './LeftSideBar.css';

class LeftSideBar extends Component {
  render() {
    return (
      <div>
        <div className="my-section">
          <div className="my-section-title">
            My Section:
          </div>
          <div className="my-section-buttons">
            <div className="button-border">
              <div className="my-section-button">
                <LeftSideBarButton id="account" type="primary" tab-index="1" className="Button" link='' text="My Account">
                </LeftSideBarButton>
              </div>
                <div className="my-section-button">
                  <LeftSideBarButton id="bookings" type="primary" tab-index="1" className="Button" link='' text="My Bookings">
                  </LeftSideBarButton>
                </div>
                <div className="my-section-button">
                  <LeftSideBarButton id="watchedRooms" type="primary" tab-index="1" className="Button" link='/watched-rooms' text="My Watched Rooms">
                  </LeftSideBarButton>
                </div>
              </div>
            </div>
          </div>
          <div className="rooms">
            <div className="rooms-title">
              <span>Rooms:</span>
            </div>
            <div className="rooms-buttons">
              <div className="button-border">
                <div className="rooms-button">
                  <LeftSideBarButton id="bookRoom" type="primary" tab-index="1" className="Button" link='' text="Book a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
                  <LeftSideBarButton id="searchRoom" type="primary" tab-index="1" className="Button" link='/search-room' text="Search a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
                  <LeftSideBarButton id="meetingRooms" type="primary" tab-index="1" className="Button" link='/meeting-rooms' text="Meeting Rooms">
                  </LeftSideBarButton>
                </div>
              </div>
            </div>
          </div>
        </div >
      );
    }
  }

  export default LeftSideBar;
