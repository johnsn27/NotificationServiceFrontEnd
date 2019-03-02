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
                <LeftSideBarButton type="primary" tab-index="1" className="Button" link='' text="My Account">
                </LeftSideBarButton>
              </div>
                <div className="my-section-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" link='' text="My Bookings">
                  </LeftSideBarButton>
                </div>
                <div className="my-section-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" link='/watched-rooms' text="My Watched Rooms">
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
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" link='' text="Book a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" link='/search-room' text="Search a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" link='' text="Meeting Rooms">
                  </LeftSideBarButton>
                </div>
              </div>
            </div>
          </div>
        </div >
      );
    }
  }

  LeftSideBar.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  export default LeftSideBar;
