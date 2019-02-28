import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WatchedRooms.css';

class WatchedRooms extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="upcoming-meetings-title">
                        Upcoming Meetings (4)
                    </div>
                    <div className="upcoming-meetings-contents">
                        <div className="upcoming-meetings-container">
                            <table width="960">
                                <tr className="upcoming-meetings-title">
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Next Available</th>
                                </tr>
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
                            </table>
                        </div>
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
