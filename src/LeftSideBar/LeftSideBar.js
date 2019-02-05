import React, { Component} from 'react';
import PropTypes from 'prop-types';
import LeftSideBarButton from './LeftSideBarButtons/LeftSideBarButton.js';
import './LeftSideBar.css';

function onClick() {
  console.log('Left Side Bar Clicked');
}

  class LeftSideBar extends Component {
    constructor(props) {
      super();
      this.toggleBack = this.toggleBack.bind(this);
      this.toggleSearch = this.toggleSearch.bind(this);
      this.state = {
        DisplayLogin: props.DisplayLogin,
        DisplaySearch: false,
      };
    }

    toggleBack() {
      this.setState({ DisplayLogin: !this.state.DisplayLogin });
    }

    toggleSearch() {
      this.setState({ DisplaySearch: !this.state.DisplaySearch });
      console.log(this.state.DisplaySearch);
    }

    render() {
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
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={this.props.search} text="Search a Room">
                  </LeftSideBarButton>
                </div>
                <div className="roomsButton">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="Meeting Rooms">
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
    text: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
  }

  export default LeftSideBar;
