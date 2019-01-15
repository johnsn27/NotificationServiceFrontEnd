import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';

it('renders without crashing', () => {
  configure({ adapter: new Adapter() });
  shallow(<App />);
});