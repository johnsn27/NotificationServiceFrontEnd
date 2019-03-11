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
                                                MEETING NAME
                                            </td>
                                            <td>
                                                {room.StartTime.slice(0, 10)}
                                            </td>
                                            <td>
                                                {room.StartTime.slice(11)} - {room.EndTime.slice(11)}
                                            </td>
                                            <td>
                                                {room.Location}
                                            </td>
                                        </tr>
                                        );
                                    }) 
                                }
                                <tr>
                                    <td>Project</td>
                                    <td>07/01/2019</td>
                                    <td>16:00- 17:30</td>
                                    <td>BC5 D5 M3 Marie Curie</td>
                                </tr>
                                <tr>
                                    <td>Sprint Review</td>
                                    <td>12/01/2019</td>
                                    <td>10:00- 12:00</td>
                                    <td>NBH 06 B M4 Kiev</td>
                                </tr>
                                <tr>
                                    <td>Retrospective</td>
                                    <td>25/01/2019</td>
                                    <td>15:00- 17:00</td>
                                    <td>BC2 D4 M2 Animal Magic</td>
                                </tr>
                                <tr>
                                    <td>Project</td>
                                    <td>28/01/2019</td>
                                    <td>16:00- 17:30</td>
                                    <td>BC5 D5 M3 Marie Curie</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="watched-meetings-title">
                        Watched Meetings ({watchedRooms.length})
                    </div>
                    <div className="watched-meetings-contents">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Next Available</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                watchedRooms.map(room => {
                                    return (
                                    <tr>
                                        <td>
                                            ROOM NAME?
                                        </td>
                                        <td>
                                            LOCATION
                                        </td>
                                        <td>
                                            {room.StartTime} - {room.EndTime.slice(11)}
                                        </td>
                                    </tr>
                                    );
                                }) 
                            }
                                <tr>
                                    <td>Project</td>
                                    <td>NBH 06 E M2 Studio 1</td>
                                    <td>19/02/2019 at 13:00</td>
                                </tr>
                                <tr>
                                    <td>Sprint Review</td>
                                    <td>NBH 04 Collaboration Zone</td>
                                    <td>26/03/2019 at 09:00</td>
                                </tr>
                                <tr>
                                    <td>Retrospective</td>
                                    <td>BC4 D5 M2 Picsso</td>
                                    <td>09/04/2019 at 18:00</td>
                                </tr>
                                <tr>
                                    <td>Project</td>
                                    <td>NBH 06 E M2 Studio 1</td>
                                    <td>15/04/2019 at 17:00</td>
                                </tr>
                                <tr>
                                    <td>Sprint Review</td>
                                    <td>NBH 04 Collaboration Zone</td>
                                    <td>07/05/2019 at 12:00</td>
                                </tr>
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
