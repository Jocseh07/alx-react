import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');
    expect(listItems.length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const textElement = wrapper.find('p').text();
    expect(textElement).toBe('Here is the list of notifications');
  });
});
