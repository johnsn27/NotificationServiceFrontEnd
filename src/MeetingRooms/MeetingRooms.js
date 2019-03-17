import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MeetingRooms.css';
import Btn from '@bbc/igm-btn';
import { getRooms } from '../ApiHelperFunctions';

export default class MeetingRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || null;
    const location = urlParams.get('location') || null;
    const floor = urlParams.get('floor') || null;
    const capacity = urlParams.get('capacity') || 0;
    const startTime = urlParams.get('start') || null;
    const endTime = urlParams.get('end') || null;
    const showUnavailable = urlParams.get('view_unavailable') || false;
    getRooms(name, location, floor, capacity, startTime, endTime, showUnavailable).then(res => this.setState({rooms: res}));
  }
  render() {
    const { rooms } = this.state;
    return (
      <div>
        <div className="meeting-rooms-title-container">
          <div className="meeting-rooms-title">
            Meeting rooms near you:
          </div>
          <Btn className="change-location-button">
            Change location
          </Btn>
        </div>

        <div className="meeting-rooms-contents">
          <table className="meeting-rooms-table">
            <thead>
              <tr>
                <th>Room Name</th>
                <th className="location-header">Location</th>
                <th>Book</th>
                <th className="view-meeting-room-link-header"></th>
              </tr>
            </thead>
            <tbody>
              {
                rooms.map(room => {
                  return (
                    <tr className="room-data">
                      <td>
                        {room.Name}
                      </td>
                      <td>
                        {room.Location}
                      </td>
                      <td>{room.Availability === 'Available'
                        ? <button>Book</button>
                        : <div>{room.Availability + ' '}<button>watch</button></div>
                      }</td>
                      <td className="view-room-link">
                        <a href={`/view-room/${room.id}`}>view</a>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

MeetingRooms.propTypes = {
  DisplayBack: PropTypes.bool,
};

MeetingRooms.defaultProps = {
  DisplayBack: false,
}
