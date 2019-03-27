import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchRoom.css';
import Btn from '@bbc/igm-btn';

class SearchRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          notification: {displayed: false, message: ''}
        }
    }
    showError(message='') {
        this.setState({notification: {displayed: true, message: message}})
    }
    search() {
        const floor = document.getElementById('floor-textarea').value;
        const roomName = document.getElementById('room-name-textarea').value;
        const location = document.getElementById('location-textarea').value;
        const date = document.getElementById('date').value && (new Date(document.getElementById('date').value).toISOString()).slice(0,10);
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        const capacity = document.getElementById('capacity-textarea').value;
        if (date === '' || startTime === '' || endTime === '') {
            this.showError(<>The following required fields are incomplete:
            <ul>{date === '' && <li>Date</li>} {startTime === '' && <li>Start Time</li>} {endTime === '' && <li>End Time</li>}</ul></>);
        } else if (isNaN(floor)) {
            this.showError(`Floor '${floor}' is invalid`);
        } else if ((capacity !== '' && capacity < 0) || isNaN(capacity)) {
            this.showError(`Capacity '${capacity}' is invalid`);
        } else {
            try {
                if (Date.parse(`${date} ${startTime}:00`) > Date.parse(`${date} ${endTime}:00`)) {
                    this.showError('End Time cannot be before Start Time');
                    return;
                }
            } catch (e) {
                this.showError(e);
            }
            window.location.href = (
                `/meeting-rooms?capacity=${
                    capacity
                }${
                    roomName  && `&name=${roomName.replace(' ', '%20')}`
                }${
                    location && `&location=${location}`
                }${
                    floor && `&floor=${floor}`
                }${
                    startTime && `&start=${`${date}%20${startTime}:00`}`
                }${
                    endTime && `&end=${`${date}%20${endTime}:00`}`
                }${
                    `&show_unavailable=${document.getElementById('unavailable-checkbox').checked}`
                }`
            )
        } 
    }
    render() {
        const { notification } = this.state;
        return (
            <div>
                <div className="search-room-title">
                    Search Room
                </div>
                <div className="search-room-contents">
                    <div className="search-room-contents-container">
                        <div role="alert" hidden={!notification.displayed} className="notification"><strong>{notification.message}</strong></div>
                        <div className="textbox">
                            <div className="label" id="room-name-label">
                                <p>Room Name:</p>
                            </div>
                            <textarea className="textarea" id="room-name-textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label" id="location-label">
                                <p>Location:</p>
                            </div>
                            <textarea className="textarea" id="location-textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label" id="floor-label">
                                <p>Floor:</p>
                            </div>
                            <textarea className="textarea" id="floor-textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label" id="capacity-label">
                                <p>Capacity:</p>
                            </div>
                            <textarea className="textarea" id="capacity-textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Date<strong>*</strong>:</p>
                            </div>
                            <input type="date" className="textarea" rows="2" id="date" placeholder="dd/mm/yyyy"/>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Start Time<strong>*</strong>:</p>
                            </div>
                            <input type="time" className="textarea" rows="2" id="start-time" placeholder="hh:mm"/>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>End Time<strong>*</strong>:</p>
                            </div>
                            <input type="time" className="textarea" rows="2" id="end-time" placeholder="hh:mm"/>
                        </div>
                        <div className="textbox">
                            <label htmlFor="unavailable-checkbox" className="label">Show unavailable rooms?</label>
                            <input type="checkbox" id="unavailable-checkbox"/>
                        </div>
                        <div className="advanced-search-button-container">
                            <div className="advanced-search-button">
                                <Btn
                                    type="primary"
                                    tab-index="1"
                                    className="Button"
                                    onClick={() => this.search()}
                                >
                                    <span>Search</span>
                                </Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SearchRoom.propTypes = {
    DisplayBack: PropTypes.bool,
};

SearchRoom.defaultProps = {
    DisplayBack: false,
}

export default SearchRoom;

