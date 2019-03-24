import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchRoom.css';
import Btn from '@bbc/igm-btn';

function onClick() {
    var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
    console.log(element);
    return element;
}

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
                            <textarea className="textarea" rows="2" id="name">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Location:</p>
                            </div>
                            <textarea className="textarea" rows="2" id="location">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Floor:</p>
                            </div>
                            <textarea className="textarea" rows="2" id="floor">
                            </textarea>
                        </div>
                        <div className="textbox">
                            <div className="label">
                                <p>Capacity:</p>
                            </div>
                            <textarea className="textarea" rows="2" id="capacity">
                            </textarea>
                        </div>
                        <div className="advanced-search-button-container">
                            <div className="advanced-search-button">
                                <Btn
                                    type="primary"
                                    tab-index="1"
                                    className="Button"
                                    onClick={onClick}
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

