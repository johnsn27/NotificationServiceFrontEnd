import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WatchedRooms from '../../WatchedRooms/WatchedRooms';

describe('WatchedRooms', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<WatchedRooms/>);
    wrapper.instance().setState({watchedRooms: [
        {
            WatchedId: 1,
            UserId: 1,
            RoomId: 1,
            Capacity: 4,
            StartTime: "2019-02-27 10:00:00",
            EndTime: "2019-02-27 11:00:00",
            Location: "BC5 A3 M2",
            RoomName: "George Lucas",
            Building: "White City",
            Availability: "Unavailable"
        },
        {
            WatchedId: 2,
            UserId: 1,
            RoomId: 3,
            Capacity: 0,
            StartTime: "2019-03-01 12:00:00",
            EndTime: "2019-03-01 13:00:00",
            Location: "BC5 D5 M3",
            RoomName: "Marie Curie",
            Building: "White City",
            Availability: "Available"
        }
    ]});

    it('renders without crashing', () => {
      shallow(<WatchedRooms />);
    });

    it('should display view room title', () => {
        const element = wrapper.find('.watched-meetings-title');
        expect(element.text()).to.equal('Watched Rooms (2)');
    });

    it('should display watched meeting table', () => {
        const element = wrapper.find('.watched-meetings-contents');
        expect(element.find('table')).to.have.lengthOf(1);
    });

    it('should display correct first column title', () => {
        const element = wrapper.find('#watched-name-title');
        expect(element.text()).to.equal('Name');
    });

    it('should display correct second column title', () => {
        const element = wrapper.find('#watched-location-title');
        expect(element.text()).to.equal('Location');
    });

    it('should display correct third column title', () => {
        const element = wrapper.find('#watched-time-title');
        expect(element.text()).to.equal('Time');
    });

    //Test other parts of the table such as the data.

  });
