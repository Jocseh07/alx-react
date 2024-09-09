import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="email"]')).toHaveLength(1);
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing the value of the two inputs', () => {
    const wrapper = shallow(<App />);
    wrapper
      .find('input[type="email"]')
      .simulate('change', { target: { value: 'test@example.com' } });
    wrapper
      .find('input[type="password"]')
      .simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });

  it('logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('isLoggedIn')).toBe(false);
  });
});
