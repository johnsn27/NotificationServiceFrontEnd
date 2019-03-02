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
      this.toggleWatch = this.toggleWatch.bind(this)
      this.state = {
        DisplayLogin: props.DisplayLogin,
        DisplaySearch: false,
        DisplayWatch: false,
      };
    }

    toggleBack() {
      this.setState({ DisplayLogin: !this.state.DisplayLogin });
    }

    toggleSearch() {
      this.setState({ DisplaySearch: !this.state.DisplaySearch });
      console.log(this.state.DisplaySearch);
    }

    toggleWatch() {
      this.setState({ DisplayWatch: !this.state.DisplayWatch});
    }

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
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="My Account">
                  </LeftSideBarButton>
                </div>
                <div className="my-section-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="My Bookings">
                  </LeftSideBarButton>
                </div>
                <div className="my-section-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={this.props.watch} text="My Watched Rooms">
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
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={onClick} text="Book a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
                  <LeftSideBarButton type="primary" tab-index="1" className="Button" onClick={this.props.search} text="Search a Room">
                  </LeftSideBarButton>
                </div>
                <div className="rooms-button">
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
    watch: PropTypes.func.isRequired,
  }

  export default LeftSideBar;
