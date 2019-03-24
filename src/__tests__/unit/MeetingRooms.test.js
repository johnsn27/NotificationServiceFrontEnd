import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeetingRooms from '../../MeetingRooms/MeetingRooms';

describe('MeetingRooms', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<MeetingRooms/>);

    it('renders without crashing', () => {
      shallow(<MeetingRooms />);
    });

    it('should display view room title', () => {
        const element = wrapper.find('.meeting-rooms-title');
        expect(element.text()).to.equal('Meeting rooms near you:');
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
