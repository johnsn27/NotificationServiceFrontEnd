import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import { getBookedRooms, getWatchedRooms, unwatchRoom, bookRoom } from '../ApiHelperFunctions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bookedRooms: [],
          watchedRooms: []
        }
      }
    componentDidMount() {
        getBookedRooms().then(res => this.setState({bookedRooms: res}));
        getWatchedRooms().then(res => this.setState({watchedRooms: res}));
    }
    render() {
        const { bookedRooms, watchedRooms } = this.state;
        return (
            <div>
                <div>
                    <div className="upcoming-meetings-title">
                        Upcoming Meetings ({bookedRooms.length})
                    </div>
                    <div className="upcoming-meetings-contents">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookedRooms.map(room => {
                                        return (
                                        <tr>
                                            <td>
                                                {room.MeetingName}
                                            </td>
                                            <td>
                                                {room.StartTime.slice(0, 10)}
                                            </td>
                                            <td>
                                                {room.StartTime.slice(11)} - {room.EndTime.slice(11)}
                                            </td>
                                            <td>
                                                {room.Location} {room.RoomName}
                                            </td>
                                        </tr>
                                        );
                                    }) 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="watched-meetings-title">
                        Watched Rooms ({watchedRooms.length})
                    </div>
                    <div className="watched-meetings-contents">
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

HomePage.propTypes = {
    DisplayBack: PropTypes.bool,
};

HomePage.defaultProps = {
    DisplayBack: false,
}

export default HomePage;
