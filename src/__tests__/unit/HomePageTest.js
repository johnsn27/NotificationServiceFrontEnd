import HomePage from '../../HomePage/HomePage';
import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from 'react-toolbox'

describe('HomePage', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<HomePage/>);
    wrapper.instance().setState({bookedRooms: [
        {
            BookingId: 1,
            UserId: 1,
            RoomId: 1,
            MeetingName: "Stand-up",
            StartTime: "2019-02-27 10:00:00",
            EndTime: "2019-02-27 11:00:00",
            Location: "BC5 A3 M2",
            RoomName: "George Lucas"
        },
        {
            BookingId: 2,
            UserId: 1,
            RoomId: 2,
            MeetingName: "Retrospective",
            StartTime: "2019-02-27 12:00:00",
            EndTime: "2019-02-27 13:00:00",
            Location: "BC5 A5 M1",
            RoomName: "Luther"
        }
        ]})

    it('renders without crashing', () => {
      shallow(<HomePage />);
    });
    console.log(wrapper);
    it('upcoming meeting title heading is displayed', () => {
        const element = wrapper.find('.upcoming-meetings-title');
        expect(element.text()).to.equal('Upcoming Meetings (2)');
    });

    // it('contains upcoming meeting table', () => {
    //     const element = wrapper.find('.upcoming-meetings-table');
    //     expect(element).to.exist.and.be.a('table');
    // });

    it('contains correct upcoming meeting first column title', () => {
        const element = wrapper.find('#upcoming-name-title');
        expect(element.text()).to.equal('Name');
    });

    it('contains correct upcoming meeting second column title', () => {
        const element = wrapper.find('#upcoming-date-title');
        expect(element.text()).to.equal('Date');
    });

    it('contains correct upcoming meeting third column title', () => {
        const element = wrapper.find('#upcoming-time-title');
        expect(element.text()).to.equal('Time');
    });

    it('contains correct upcoming meeting fourth column title', () => {
        const element = wrapper.find('#upcoming-location-title');
        expect(element.text()).to.equal('Location');
    });

    // it('watched meeting title heading is displayed', () => {
    //     const element = wrapper.find('#watched-meetings-title');
    //     expect(element.text()).to.equal('Watched Meetings (5)');
    // });

    // it('contains watched meeting table', () => {
    //     const element = wrapper.find('.watched-meetings-contents');
    // });

    // it('contains correct watched meeting first column title', () => {
    //     const element = wrapper.find('#watched-name-title');
    //     expect(element.text()).to.equal('Name');
    // });

    // it('contains correct watched meeting second column title', () => {
    //     const element = wrapper.find('#watched-location-title');
    //     expect(element.text()).to.equal('Location');
    // });

    // it('contains correct watched meeting third column title', () => {
    //     const element = wrapper.find('#watched-time-title');
    //     expect(element.text()).to.equal('Time');
    // });

  });
