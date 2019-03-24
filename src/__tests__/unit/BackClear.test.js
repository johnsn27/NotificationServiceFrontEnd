import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchRoom from '../../SearchRoom/SearchRoom';

describe('SearchRoom', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<SearchRoom />);
  });

  // it('matches snapshot', () => {
  //   const tree = shallow(<SearchRoom/>);
  //   expect(tree).toMatchSnapshot();
  // })

  it('contains a button', () => {
  const app = shallow(<SearchRoom/>);
  expect(app.find('.Button').exists()).toBe(true);
  });
  describe('Textboxes', () => {
    it('contains a textbox', () => {
    const app = shallow(<SearchRoom/>);
    expect(app.find('.textbox').exists()).toBe(true);
    });
    
    it('contains a name textbox', () => {
    const app = shallow(<SearchRoom/>);
    expect(app.find('#name').exists()).toBe(true);
    });
    
    it('contains a location textbox', () => {
    const app = shallow(<SearchRoom/>);
    expect(app.find('#location').exists()).toBe(true);
    });
    
    it('contains a floor textbox', () => {
    const app = shallow(<SearchRoom/>);
    expect(app.find('#floor').exists()).toBe(true);
    });
    
    it('contains a capacity textbox', () => {
    const app = shallow(<SearchRoom/>);
    expect(app.find('#location').exists()).toBe(true);
    });
  });

});
