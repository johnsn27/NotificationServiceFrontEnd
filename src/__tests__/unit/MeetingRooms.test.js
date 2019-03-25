import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeetingRooms from '../../MeetingRooms/MeetingRooms';

describe('MeetingRooms', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<MeetingRooms/>);
    wrapper.setState({rooms: [
        {
            id: 1,
            Name: "George Lucas",
            Location: "BC5 A3 M2",
            Floor: "5",
            Capacity: 8,
            Building: "White City",
            Availability: "Available"
        },
        {
            id: 2,
            Name: "Luther",
            Location: "BC5 A5 M1",
            Floor: "5",
            Capacity: 4,
            Building: "White City",
            Availability: "Unavailable"
        },
        {
            id: 3,
            Name: "Marie Curie",
            Location: "BC5 D5 M3",
            Floor: "5",
            Capacity: 4,
            Building: "White City",
            Availability: "Available"
        },
        {
            id: 4,
            Name: "Fawlty Towers",
            Location: "BC4 C2 M3",
            Floor: "4",
            Capacity: 10,
            Building: "White City",
            Availability: "Available"
        },
        {
            id: 5,
            Name: "Audrey Hepburn",
            Location: "BC5 C5 M2",
            Floor: "5",
            Capacity: 10,
            Building: "White City",
            Availability: "Available"
        },
        {
            id: 6,
            Name: "Judy Garland",
            Location: "BC5 B5 M2",
            Floor: "5",
            Capacity: 10,
            Building: "White City",
            Availability: "Available"
        }
    ]})

    it('renders without crashing', () => {
      shallow(<MeetingRooms />);
    });

    it('should display view room title', () => {
        const element = wrapper.find('.meeting-rooms-title');
        expect(element.text()).to.equal('Matching meeting rooms:');
    });

    it('should display correct change location button text', () => {
        const element = wrapper.find('.change-location-button');
        expect(element.text()).to.equal('<Btn />');
        //test name of button
    });

    it('should display meeting room table', () => {
        const element = wrapper.find('.meeting-rooms-table');
        expect(element.find('table')).to.have.lengthOf(1);
    });


    it('should display correct first column title', () => {
        const element = wrapper.find('.room-name-header');
        expect(element.text()).to.equal('Room Name');
    });

    it('should display correct second column title', () => {
        const element = wrapper.find('.location-header');
        expect(element.text()).to.equal('Location');
    });

    it('should display correct third column title', () => {
        const element = wrapper.find('.view-meeting-room-link-header');
        expect(element.text()).to.equal('');
    });

    //Test other parts of the table such as the data.

  });
