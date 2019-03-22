import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WatchedRooms.css';
import { getWatchedRooms, unwatchRoom, convertDate } from '../ApiHelperFunctions';
import WatchRoomDialog from '../WatchRoomDialog/WatchRoomDialog';

class WatchedRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
          watchedRooms: [],
          activeRoom : { room: { room: {} }, start: null, end: null },
          displayDialog: false
        }
        this.setDisplayDialog = this.setDisplayDialog.bind(this);
      }
    componentDidMount() {
        getWatchedRooms().then(res => this.setState({watchedRooms: res}));
    }
    setDisplayDialog(bool, room={room: {}, start: null, end: null}) {
        this.setState({displayDialog: bool})
        this.setState({activeRoom: room})
    }
    render() {
        const { watchedRooms, activeRoom, displayDialog } = this.state;
        return (
            <div>
                <div>
                    <div className="upcoming-meetings-title">
                        Watched Rooms ({watchedRooms.length})
                    </div>
                    <div className="upcoming-meetings-contents">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Time</th>
                                    <th>Availability</th>
                                    <th>Unwatch</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                watchedRooms.map(room => {
                                    return (
                                    <tr>
                                        <td>
                                            {room.RoomName}
                                        </td>
                                        <td>
                                            {room.Location}
                                        </td>
                                        <td>
                                            {convertDate(room.StartTime)} - {convertDate(room.EndTime).slice(11)}
                                        </td>
                                        <td>
                                            {room.Availability} {room.Availability === 'Available'
                                                ? <div>- <button onClick={() => {
                                                    this.setDisplayDialog(true, {room: room, start: room.StartTime, end: room.EndTime})
                                                    //bookRoom(null, room.WatchedId, null, room.StartTime, room.EndTime).then(unwatchRoom(room.WatchedId).then(getWatchedRooms().then(res => this.setState({watchedRooms: res}))))
                                                }}>Book</button></div>
                                                : null}
                                        </td>
                                        <td>
                                            {room.WatchedId}
                                            <button onClick={() => {unwatchRoom(room.WatchedId).then(getWatchedRooms().then(res => this.setState({watchedRooms: res})))}}>Unwatch</button>
                                        </td>
                                    </tr>
                                    );
                                }) 
                            }
                            </tbody>
                        </table>
                        <WatchRoomDialog
                            dialogHidden={!displayDialog}
                            room={activeRoom}
                            close={() => this.setDisplayDialog(false)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

WatchedRooms.propTypes = {
    DisplayBack: PropTypes.bool,
};

WatchedRooms.defaultProps = {
    DisplayBack: false,
}

export default WatchedRooms;
