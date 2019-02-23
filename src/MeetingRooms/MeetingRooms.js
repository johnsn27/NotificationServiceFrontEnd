import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MeetingRooms.css';
import Btn from '@bbc/igm-btn';

export default class MeetingRooms extends Component {
  constructor(props) {
    super();
    this.toggleBack = this.toggleBack.bind(this);
    this.state = { DisplayLogin: props.DisplayLogin };
  }

  toggleBack() {
    this.setState({ DisplayLogin: !this.state.DisplayLogin });
  }

  render() {
    const roomsArray = [
      {
        name: 'Studio 1',
        location: '06 E M1',
        key: 1
      },
      {
        name: 'Studio 2',
        location: '06 E M2',
        key: 2
      },
      {
        name: 'Studio 3',
        location: '06 E M3',
        key: 3
      },
      {
        name: 'Mylvaganam Nimalarajan',
        location: '06 D M4',
        key: 4
      },
      {
        name: 'Kari Blackburn',
        location: '06 D M3',
        key: 5
      },
      {
        name: 'Kiev',
        location: '06 D M2',
        key: 6
      },
      {
        name: 'Nice to See You',
        location: '06 D M1',
        key: 7
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 8
      },
      {
        name: 'Peter Eckersley',
        location: '06 C M2',
        key: 9
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 10
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 11
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 12
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 13
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 14
      },
      {
        name: 'Park 2',
        location: '06 C M3',
        key: 15
      }
    ];
    return (
      <div>
        <div className="meeting-rooms-title-container">
          <div className="meeting-rooms-title">
            Meeting rooms near you:
          </div>
          <Btn className="change-location-button">
            Change location
          </Btn>
        </div>

        <div className="meeting-rooms-contents">
          <table className="meeting-rooms-table">
            <thead>
              <tr>
                <th>Room Name</th>
                <th className="location-header">Location</th>
                <th className="view-meeting-room-link-header"></th>
              </tr>
            </thead>
            <tbody>
              {
                roomsArray.map(room => {
                  return (
                    <tr className='room-data'>
                      <td>
                        {room.name}
                      </td>
                      <td>
                        {room.location}
                      </td>
                      <td>
                        <a href={`/view-room/${room.key}`}>view</a>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

MeetingRooms.propTypes = {
  DisplayBack: PropTypes.bool,
};

MeetingRooms.defaultProps = {
  DisplayBack: false,
}
