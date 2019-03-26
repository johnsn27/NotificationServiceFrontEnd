import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LeftSideBar from '../../LeftSideBar/LeftSideBar';

describe('SearchRoom', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<LeftSideBar id="LeftSideBar" />);
  });

  it('matches snapshot', () => {
    const tree = shallow(<LeftSideBar/>);
    expect(tree).toMatchSnapshot();
  })

  describe('Buttons', () => {
    it('contains a button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('.Button').exists()).toBe(true);
    });
    
    it('contains 6 buttons', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('.Button').length).toBe(6);
    });

    it('contains an account button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#account').exists()).toBe(true);
    });

    it('contains a bookings button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#bookings').exists()).toBe(true);
    });

    it('contains a watchedRooms button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#watchedRooms').exists()).toBe(true);
    });

    it('contains a bookRoom button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#bookRoom').exists()).toBe(true);
    });

    it('contains a searchRoom button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#searchRoom').exists()).toBe(true);
    });

    it('contains a meetingRooms button', () => {
      const app = shallow(<LeftSideBar />);
      expect(app.find('#meetingRooms').exists()).toBe(true);
    });
  });

});
