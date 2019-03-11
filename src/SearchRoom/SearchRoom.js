import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchRoom.css';
import Btn from '@bbc/igm-btn';

class SearchRoom extends Component {
    render() {
        return (
            <div>
                <div className="search-room-title">
                    Search Room
                </div>
                <div className="search-room-contents">
                    <div className="search-room-contents-container">
                        <div className="textbox">
                            <div className="label">
                                <p>Room Name:</p>
                            </div>
                            <textarea className="textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Location:</p>
                            </div>
                            <textarea className="textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Floor:</p>
                            </div>
                            <textarea className="textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Capacity:</p>
                            </div>
                            <textarea className="textarea" rows="2">
                            </textarea>
                        </div>
                        <div className="advanced-search-button-container">
                            <div className="advanced-search-button">
                                <Btn
                                    type="primary"
                                    tab-index="1"
                                    className="Button"
                                    onClick={() => window.location.href = '/meeting-rooms'}
                                >
                                    <span>Advanced Search</span>
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

