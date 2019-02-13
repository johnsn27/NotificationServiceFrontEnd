import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchRoom.css';
import Btn from '@bbc/igm-btn';

function onClick() {
    var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
    console.log(element);
    return element;
}


class ViewRoom extends Component {
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
                <div className="SearchRoomTitle">
                    Studio 1 06 E M1
                </div>
                <div className="SearchRoomContentsContainer">
                    <div className="SearchRoomContents">
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
                        <div className="AdvancedSearchButtonContainer">
                            <div className="ButtonBorder">
                                <div className="AdvancedSearchButton">
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
            </div>
        );
    }
}

ViewRoom.propTypes = {
    DisplayBack: PropTypes.bool,
};

ViewRoom.defaultProps = {
    DisplayBack: false,
}

export default ViewRoom;

