import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MeetingRooms.css';
import Btn from '@bbc/igm-btn';
import { getRooms } from '../ApiHelperFunctions';
import WatchRoomDialog from '../WatchRoomDialog/WatchRoomDialog';
import '@bbc/igm-dialog-instance/dist/DialogInstance.css';

const updateRooms = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name') || null;
  const location = urlParams.get('location') || null;
  const floor = urlParams.get('floor') || null;
  const capacity = urlParams.get('capacity') || 0;
  const startTime = urlParams.get('start') || null;
  const endTime = urlParams.get('end') || null;
  const showUnavailable = urlParams.get('view_unavailable') || false;
  return getRooms(name, location, floor, capacity, startTime, endTime, showUnavailable);
}

export default class MeetingRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      activeRoom: {room: {}, start: null, end: null},
      displayDialog: false,
      dialogType: 'Book'
    }
    this.setDisplayDialog = this.setDisplayDialog.bind(this);
  }
  componentDidMount() {
    updateRooms().then(res => this.setState({rooms: res}));
  }
  setDisplayDialog(bool, room={room: {}, start: null, end: null}, type) {
    this.setState({dialogType: type})
    this.setState({displayDialog: bool})
    this.setState({activeRoom: room})
  }
  render() {
    const { rooms, displayDialog, activeRoom, dialogType } = this.state;
    const urlParams = new URLSearchParams(window.location.search);
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
          {rooms.length ? <table className="meeting-rooms-table">
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
                      <td>
                      {room.Availability === 'Available' ? null : 'Unavailable'}
                      <button button disabled={false} onClick={() => {
                          this.setDisplayDialog(true, {room: room, start: urlParams.get('start') || null, end: urlParams.get('end') || null}, room.Availability === 'Available' ? 'Book' : 'Watch')
                        }}>{room.Availability === 'Available' ? 'Book' : true ? 'Watch' : 'Already watching'}</button>
                      {/* {room.Availability === 'Available'
                        ? <button onClick={() => {
                          bookRoom(room.id, null, (this.urlParams.get('start')) || null, (this.urlParams.get('end') || null)).then(updateRooms().then(res => this.setState({rooms: res})))
                        }}>Book</button>
                        : <div>{room.Availability + ' '}<button onClick={() => {
                          this.setDisplayDialog(true, {room: room, start: urlParams.get('start') || null, end: urlParams.get('end') || null})
                        }}>watch</button></div>
                      }*/}</td> 
                      <td className="view-room-link">
                        <a href={`/view-room/${room.id}`}>view</a>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table> : <div className="no-results-found">No rooms found {urlParams.get('view_unavailable') !== 'false' ? null : <button onClick={() => window.location.search = window.location.search.replace("view_unavailable=false","view_unavailable=true")}>Check For Booked Rooms</button> }</div>}
          <WatchRoomDialog
            dialogHidden={!displayDialog}
            room={activeRoom}
            close={() => this.setDisplayDialog(false)}
            type={dialogType}
          />
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
