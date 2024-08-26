import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(3);
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const html = firstNotificationItem.html();
    const expectedHtml =
      '<li data-priority="default">New course available</li>';
    expect(html).toBe(expectedHtml);
  });
});
