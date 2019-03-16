import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WatchedRooms.css';

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
                                            {room.Availability} {room.Availability === 'Available' ? '- Book' : null}
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

WatchedRooms.propTypes = {
    DisplayBack: PropTypes.bool,
};

WatchedRooms.defaultProps = {
    DisplayBack: false,
}

export default WatchedRooms;
