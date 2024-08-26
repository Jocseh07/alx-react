import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(3);
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setProps({ displayDrawer: true });
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const html = firstNotificationItem.html();
    const expectedHtml =
      '<li data-priority="default">New course available</li>';
    expect(html).toBe(expectedHtml);
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const menuItem = wrapper.find('.menuItem');
    expect(menuItem.exists()).toBe(false);
  });

  it('does not display the div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const notificationsDiv = wrapper.find('div.Notifications');
    expect(notificationsDiv.exists()).toBe(false);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menuItem = wrapper.find('.menuItem');
    expect(menuItem.exists()).toBe(true);
  });

  it('displays the div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationsDiv = wrapper.find('div.Notifications');
    expect(notificationsDiv.exists()).toBe(true);
  });
});
