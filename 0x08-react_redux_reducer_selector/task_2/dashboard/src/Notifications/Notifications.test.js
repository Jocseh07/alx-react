import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menuItem = wrapper.find('.menuItem');
    expect(menuItem.exists()).toBe(true);
  });

  it('displays the div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationsDiv = wrapper.find('.Notifications');
    expect(notificationsDiv.exists()).toBe(true);
  });

  it('renders correctly with an empty array', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />,
    );
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(0);
  });

  it('renders the correct number of NotificationItem with a non-empty array', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />,
    );
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(notifications.length);
  });

  it('does not display the message when listNotifications is not empty', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />,
    );
    const message = wrapper.find('.empty-message');
    expect(message.exists()).toBe(false);
  });

  it('calls console.log with the right message when markAsRead is called', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(console, 'log');
    const id = 1;
    instance.markAsRead(id);
    expect(spy).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`,
    );
    spy.mockRestore();
  });

  it('does not rerender when updating props with the same list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />,
    );
    const instance = wrapper.instance();
    const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ displayDrawer: true, listNotifications: notifications });
    expect(shouldUpdateSpy).toHaveBeenCalledTimes(1);
    shouldUpdateSpy.mockRestore();
  });

  it('rerenders when updating props with a longer list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const longerList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />,
    );
    const instance = wrapper.instance();
    const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ displayDrawer: true, listNotifications: longerList });
    expect(shouldUpdateSpy).toHaveBeenCalledTimes(1);
    shouldUpdateSpy.mockRestore();
  });

  it('calls handleDisplayDrawer when the menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />,
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when the button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
      />,
    );
    wrapper.find('.close-button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
