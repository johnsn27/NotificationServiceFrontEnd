import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';

const getBookedRooms = async () => {
    const res = await fetch('http://127.0.0.1:5000/user-bookings/1', {
      headers: {
        'Accept': 'application/json',
      },
    });
    return await res.json();
}

const getWatchedRooms = async () => {
    const res = await fetch('http://127.0.0.1:5000/user-watch-list/1', {
      headers: {
        'Accept': 'application/json',
      },
    });
    return await res.json();
}

const unwatchRoom = async (watchId) => {
    const res = await fetch(`http://127.0.0.1:5000/delete-watch/${watchId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        },
    });
    console.log(await res.json());
}

const bookRoom = (roomId) => {
    return fetch('http://127.0.0.1:5000/book-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(
        {
          UserId: 1,
          RoomId: roomId,
          Name: "My meeting",
          StartTime: "2019-02-27 10:00:00",
          EndTime: "2019-02-27 11:00:00"
        }
      ),
    }).then(res => console.log(res))
  }

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
                                                ? <div>- <button onClikc={() => {bookRoom(room.WatchedId)}}>Book</button></div>
                                                : null}
                                        </td>
                                        <td>
                                            {room.WatchedId}
                                            <button onClick={() => {unwatchRoom(room.WatchedId)}}>Unwatch</button>
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
