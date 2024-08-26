import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import './Notifications.css';

describe('NotificationItem', () => {
  it('should render without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('should render correct html when type and value props are passed', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.html()).toEqual(`<li data-priority="${type}">${value}</li>`);
  });

  it('should render correct html when html prop is passed', () => {
    const html = '<u>test</u>';
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: { __html: html } });
    expect(wrapper.html()).toContain(html);
  });
});
