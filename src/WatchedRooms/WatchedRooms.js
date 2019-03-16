import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WatchedRooms.css';
import { getWatchedRooms, unwatchRoom, bookRoom } from '../ApiHelperFunctions';

class WatchedRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
          watchedRooms: []
        }
      }
    componentDidMount() {
        getWatchedRooms().then(res => this.setState({watchedRooms: res}));
    }
    render() {
        const { watchedRooms } = this.state;
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
                                            {room.StartTime} - {room.EndTime.slice(11)}
                                        </td>
                                        <td>
                                            {room.Availability} {room.Availability === 'Available'
                                                ? <div>- <button onClick={() => {bookRoom(room.WatchedId).then(unwatchRoom(room.WatchedId).then(getWatchedRooms().then(res => this.setState({watchedRooms: res}))))}}>Book</button></div>
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
