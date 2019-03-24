import HomePage from '../../HomePage/HomePage';
import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from 'react-toolbox'

describe('HomePage', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<HomePage/>);

    it('renders without crashing', () => {
      shallow(<HomePage />);
    });

    it('should display upcoming meeting title heading', () => {
        const element = wrapper.find('.upcoming-meetings-title');
        expect(element.text()).to.equal('Upcoming Meetings (4)');
    });


    it('should contain upcoming meeting table', () => {
        const element = wrapper.find('.upcoming-meetings-contents');
        expect(element.find('table')).to.have.lengthOf(1);
    });

    it('should display correct upcoming meeting first column title', () => {
        const element = wrapper.find('.upcoming-name-title');
        expect(element.text()).to.equal('Name');
    });

    it('should display correct upcoming meeting second column title', () => {
        const element = wrapper.find('.upcoming-date-title');
        expect(element.text()).to.equal('Date');
    });

    it('should display correct upcoming meeting third column title', () => {
        const element = wrapper.find('.upcoming-time-title');
        expect(element.text()).to.equal('Time');
    });

    it('should display correct upcoming meeting fourth column title', () => {
        const element = wrapper.find('.upcoming-location-title');
        expect(element.text()).to.equal('Location');
    });

    //Tests other parts of the table?

    it('should display watched meeting title heading', () => {
        const element = wrapper.find('.watched-meetings-title');
        expect(element.text()).to.equal('Watched Meetings (5)');
    });


    it('should display watched meeting table', () => {
        const element = wrapper.find('.watched-meetings-contents');
        expect(element.find('table')).to.have.lengthOf(1);
    });

    it('should display correct watched meeting first column title', () => {
        const element = wrapper.find('.watched-name-title');
        expect(element.text()).to.equal('Name');
    });

    it('should display correct watched meeting second column title', () => {
        const element = wrapper.find('.watched-location-title');
        expect(element.text()).to.equal('Location');
    });

    it('should display correct watched meeting third column title', () => {
        const element = wrapper.find('.watched-next-available-title');
        expect(element.text()).to.equal('Next Available');
    });

    //Tests other parts of the table?

  });
