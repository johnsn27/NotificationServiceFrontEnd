import React, { Component } from 'react';
import DialogInstance from '@bbc/igm-dialog-instance';
import { convertDate, watchRoom, bookRoom } from '../ApiHelperFunctions';
import './WatchRoomDialog.css';

export default class WatchRoomDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          notification: {displayed: false, message: ''}
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({notification: {displayed: false, message: ''}})
        document.getElementById("name").value = nextProps.room.room.Name || nextProps.room.room.RoomName;
        document.getElementById("building").value = nextProps.room.room.Building;
        document.getElementById("location").value = nextProps.room.room.Location;
        //date might not work for other browsers.
        document.getElementById("date").value = nextProps.room.start ? nextProps.room.start.slice(0, 10) : '';
        document.getElementById("start").value = nextProps.room.start ? convertDate(nextProps.room.start).slice(11) : '';
        document.getElementById("end").value = nextProps.room.end ? convertDate(nextProps.room.end).slice(11) : '';
    }
    showError() {
        this.setState({notification: {displayed: true, message: 'Error Booking Room'}})
    }
    render() {
        const { dialogHidden, room, close, type } = this.props;
        const { notification } = this.state;
        return (
            <DialogInstance
                dialogHeader={<h3>{type} Room</h3>}
                dialogBody={   
                    <div>
                        <div role="alert" hidden={!notification.displayed} className="notification"><strong></strong>{notification.message}</div>
                        <div className="textbox">
                            <label className="label">
                                <p>Room Name:</p>
                            </label>
                            <textarea className="textarea" rows="2" id="name" disabled>
                            </textarea>
                        </div>
                        <div className="textbox">
                            <label className="label">
                                <p>Building:</p>
                            </label>
                            <textarea className="textarea" rows="2" id="building" disabled>
                            </textarea>
                        </div>
                        <div className="textbox">
                            <label className="label">
                                <p>Location:</p>
                            </label>
                            <textarea className="textarea" rows="2" id="location" disabled>
                            </textarea>
                        </div>
                        {
                            type === 'Book' ?
                            <div className="textbox">
                                <label className="label">
                                    <p>Meeting Name:</p>
                                </label>
                                <textarea className="textarea" rows="2" id="meeting-name">
                                </textarea>
                            </div>
                            : null
                        }
                        <div className="textbox">
                            <label className="label">
                                <p>Date:</p>
                            </label>
                            <input className="textarea" rows="2" id="date" type="date"/>
                        </div>
                        <div className="textbox">
                            <label className="label">
                                <p>Start Time:</p>
                            </label>
                            <input className="textarea" rows="2" id="start" type="time"/>
                        </div>
                        <div className="textbox">
                            <label className="label">
                                <p>End Time:</p>
                            </label>
                            <input className="textarea" rows="2" id="end" type="time"/>
                        </div>
                    </div>
                }
                dialogFooter={<div>
                    <button onClick={() => {type === 'Book'
                        ? bookRoom(
                            room.room.id,
                            document.getElementById('meeting-name').value,
                            `${(new Date(document.getElementById('date').value).toISOString()).slice(0,10)} ${document.getElementById('start').value}:00`,
                            `${(new Date(document.getElementById('date').value).toISOString()).slice(0,10)} ${document.getElementById('end').value}:00`,
                        ).then(res => {(res.status === 500) ? this.showError() : close()})
                        : watchRoom(room.room.id, 0, room.start, room.end).then(close())
                    }}>Confirm</button>
                    <button onClick={close}>Cancel</button>
                </div>}
                hidden={dialogHidden}
            />
        );
    }
}