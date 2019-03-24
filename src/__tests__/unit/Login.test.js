import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../Login/Login';

describe('Login', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('matches snapshot', () => {
    const tree = shallow(<Login/>);
    expect(tree).toMatchSnapshot();
  })

  it('contains a button', () => {
  const app = shallow(<Login/>);
  expect(app.find('.Button').exists()).toBe(true);
  });
});
