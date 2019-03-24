import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WatchedRooms from '../../WatchedRooms/WatchedRooms';

describe('WatchedRooms', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<WatchedRooms/>);

    it('renders without crashing', () => {
      shallow(<WatchedRooms />);
    });

    it('should display view room title', () => {
        const element = wrapper.find('.watched-meetings-title');
        expect(element.text()).to.equal('Watched Meetings (4)');
    });

    it('should display correct wheelchair support text box', () => {
        const element = wrapper.find('.watched-meetings-contents');
        expect(element.find('table')).to.have.lengthOf(1);
    });

    it('should display correct first column title', () => {
        const element = wrapper.find('.watched-name-title');
        expect(element.text()).to.equal('Name');
    });

    it('should display correct second column title', () => {
        const element = wrapper.find('.watched-location-title');
        expect(element.text()).to.equal('Location');
    });

    it('should display correct third column title', () => {
        const element = wrapper.find('.watched-next-available-title');
        expect(element.text()).to.equal('Next Available');
    });

    //Test other parts of the table such as the data.

  });
