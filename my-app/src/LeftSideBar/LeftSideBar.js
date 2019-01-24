import React from 'react';
import PropTypes from 'prop-types';
import LeftSideBarButton from './LeftSideBarButtons/LeftSideBarButton.js';

function LeftSideBar({ type, tabIndex, className, onClick, text }) {
  return (
    <div>
      <div className="MySection">
        <div className="MySectionTitle">
          My Section:
        </div>
        <div className="MySectionButtons">
          <div className="buttonBorder">
            <div className="mySectionButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="My Account">
              </LeftSideBarButton>
            </div>
            <div className="mySectionButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="My Bookings">
              </LeftSideBarButton>
            </div>
            <div className="mySectionButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="My Watched Rooms">
              </LeftSideBarButton>
            </div>
          </div>
        </div>
      </div>
      <div className="Rooms">
        <div className="RoomsTitle">
          <span>Rooms:</span>
        </div>
        <div className="RoomsButtons">
          <div className="buttonBorder">
            <div className="roomsButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="Book a Room">
              </LeftSideBarButton>
            </div>
            <div className="roomsButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="Search a Room">
              </LeftSideBarButton>
            </div>
            <div className="roomsButton">
              <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="Meeting Rooms">
              </LeftSideBarButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LeftSideBar.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default LeftSideBar;
