import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import { getBookedRooms, getWatchedRooms, convertDate } from '../ApiHelperFunctions';
import WatchedRooms from '../WatchedRooms/WatchedRooms';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bookedRooms: [],
        }
      }
    componentDidMount() {
        getBookedRooms().then(res => this.setState({bookedRooms: res}));
        getWatchedRooms().then(res => this.setState({watchedRooms: res}));
    }
    render() {
        const { bookedRooms } = this.state;
        return (
            <div>
                <div>
                    <div className="upcoming-meetings-title">
                        Upcoming Meetings ({bookedRooms.length})
                    </div>
                    <div className="upcoming-meetings-contents">
                        { bookedRooms.length ?
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
                                            const startTime = convertDate(room.StartTime);
                                            return (
                                            <tr>
                                                <td>
                                                    {room.MeetingName}
                                                </td>
                                                <td>
                                                    {startTime.slice(0, 10)}
                                                </td>
                                                <td>
                                                    {startTime.slice(11)} - {convertDate(room.EndTime).slice(11)}
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
                            : 'You do not have any upcoming meetings'
                        }
                    </div>
                </div>
                <WatchedRooms/>
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
