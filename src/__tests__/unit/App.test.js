import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('contains a button', () => {
  const app = shallow(<App/>);
  expect(app.find('.Button').exists()).toBe(true);
  });
});
