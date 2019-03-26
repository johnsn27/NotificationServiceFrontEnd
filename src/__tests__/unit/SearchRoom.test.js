import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchRoom from '../../SearchRoom/SearchRoom';

describe('SearchRoom', () => {
  configure({ adapter: new Adapter() });
  let wrapper = shallow(<SearchRoom/>);

  it('renders without crashing', () => {
    shallow(<SearchRoom />);
  });

  it('should display search room title', () => {
      const element = wrapper.find('.search-room-title');
      expect(element.text()).to.equal('Search Room');
  });

  it('should display correct room name text', () => {
  const element = wrapper.find('#room-name-label');
  expect(element.text()).to.equal('Room Name:');
  });

  it('should display correct room name text box', () => {
  const element = wrapper.find('#room-name-textarea');
  expect(element.find('textarea')).to.have.lengthOf(1);
  });

  it('should display correct location text', () => {
    const element = wrapper.find('#location-label');
    expect(element.text()).to.equal('Location:');
  });

  it('should display correct location text box', () => {
    const element = wrapper.find('#location-textarea');
    expect(element.find('textarea')).to.have.lengthOf(1);
  });

  it('should display correct floor text', () => {
    const element = wrapper.find('#floor-label');
    expect(element.text()).to.equal('Floor:');
  });

  it('should display correct floor text box', () => {
    const element = wrapper.find('#floor-textarea');
    expect(element.find('textarea')).to.have.lengthOf(1);
  });

  it('should display correct capacity text', () => {
    const element = wrapper.find('#capacity-label');
    expect(element.text()).to.equal('Capacity:');
  });

  it('should display correct room name text box', () => {
    const element = wrapper.find('#capacity-textarea');
    expect(element.find('textarea')).to.have.lengthOf(1);
  });

  it('should display correct watch button text', () => {
    const element = wrapper.find('.Button');
    expect(element.text()).to.equal('<Btn />');
    //test name of button
  });

});
