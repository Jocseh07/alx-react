import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  // it('renders a div with the class App-header', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-header')).toHaveLength(1);
  // });

  // it('renders a div with the class App-body', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-body')).toHaveLength(1);
  // });

  // it('renders a div with the class App-footer', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.App-footer')).toHaveLength(1);
  // });
});
