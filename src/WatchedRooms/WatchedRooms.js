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
                                    <th>Next Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Studio 3</td>
                                    <td>NBH 06 E M2 Studio</td>
                                    <td>19/02/2019 at 13:00</td>
                                </tr>
                                <tr>
                                    <td>Kari Blackburn</td>
                                    <td>NBH 04 Collboration Zone</td>
                                    <td>26/03/2019 at 09:00</td>
                                </tr>
                                <tr>
                                    <td>Peter Eckersley</td>
                                    <td>BC4 D5 M2 Picasso</td>
                                    <td>09/04/2019 at 18:00</td>
                                </tr>
                                <tr>
                                    <td>Nice To See You</td>
                                    <td>NBH 03 C M3 Gerard Manell VC</td>
                                    <td>17/04/2019 at 11:30</td>
                                </tr>
                                <tr>
                                    <td>Kiev</td>
                                    <td>NBH 07 B M3 Studio</td>
                                    <td>23/05/2019 at 14:00</td>
                                </tr>
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
