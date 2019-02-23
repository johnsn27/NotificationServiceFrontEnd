import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WatchedRooms.css';

class WatchedRooms extends Component {
    constructor(props) {
        super();
        this.toggleBack = this.toggleBack.bind(this);
        this.state = { DisplayLogin: props.DisplayLogin };
    }

    toggleBack() {
        this.setState({ DisplayLogin: !this.state.DisplayLogin });
    }

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
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                </tr>
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

