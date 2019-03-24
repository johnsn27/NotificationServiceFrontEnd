import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewRoom from '../../ViewRoom/ViewRoom';

describe('ViewRoom', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<ViewRoom/>);

    it('renders without crashing', () => {
      shallow(<ViewRoom />);
    });

    it('should display view room title', () => {
        const element = wrapper.find('.view-room-title');
        expect(element.text()).to.equal('Studio 1 06 E M1');
    });


    it('should display image', () => {
        const element = wrapper.find('.image');
        expect(element.find('img')).to.have.lengthOf(1);
    });

    it('should display correct image caption', () => {
        const element = wrapper.find('.image-caption-text');
        expect(element.text()).to.equal('Click for full picture');
    });

    it('should display correct watch button text', () => {
        const element = wrapper.find('.watch-button');
        expect(element.text()).to.equal('<Btn />');
    });

    it('should display correct book button text', () => {
        const element = wrapper.find('.book-button');
        expect(element.text()).to.equal('<Btn />');
    });

    it('should display correct room id text', () => {
        const element = wrapper.find('.room-id-label');
        expect(element.text()).to.equal('Room ID:');
    });

    it('should display correct room id text box', () => {
        const element = wrapper.find('.room-id-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct room name text', () => {
        const element = wrapper.find('.room-name-label');
        expect(element.text()).to.equal('Room Name:');
    });

    it('should display correct room name text box', () => {
        const element = wrapper.find('.room-name-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct area code text', () => {
        const element = wrapper.find('.area-code-label');
        expect(element.text()).to.equal('Area Code:');
    });

    it('should display correct area code name text box', () => {
        const element = wrapper.find('.area-code-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct capacity text', () => {
        const element = wrapper.find('.capacity-label');
        expect(element.text()).to.equal('Capacity:');
    });

    it('should display correct capacity text box', () => {
        const element = wrapper.find('.capacity-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct screen text', () => {
        const element = wrapper.find('.screen-label');
        expect(element.text()).to.equal('Screen:');
    });

    it('should display correct screen text box', () => {
        const element = wrapper.find('.screen-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct DVD text', () => {
        const element = wrapper.find('.dvd-label');
        expect(element.text()).to.equal('DVD:');
    });

    it('should display correct DVD text box', () => {
        const element = wrapper.find('.dvd-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct VCU text', () => {
        const element = wrapper.find('.vcu-label');
        expect(element.text()).to.equal('VCU:');
    });

    it('should display correct VCU text box', () => {
        const element = wrapper.find('.vcu-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct whiteboard text', () => {
        const element = wrapper.find('.whiteboard-label');
        expect(element.text()).to.equal('Whiteboard:');
    });

    it('should display correct whiteboard text box', () => {
        const element = wrapper.find('.whiteboard-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });

    it('should display correct wheelchair support text', () => {
        const element = wrapper.find('.wheelchair-support-label');
        expect(element.text()).to.equal('Wheelchair Support:');
    });

    it('should display correct wheelchair support text box', () => {
        const element = wrapper.find('.wheelchair-support-textarea');
        expect(element.find('textarea')).to.have.lengthOf(1);
    });
  });
