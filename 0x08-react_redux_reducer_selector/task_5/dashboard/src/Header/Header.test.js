import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('renders an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const context = { user: { isLoggedIn: false, email: '' } };
    const wrapper = mount(<Header />, { context });
    expect(wrapper.find('.logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const context = { user: { isLoggedIn: true, email: 'test@example.com' } };
    const wrapper = mount(<Header />, { context });
    expect(wrapper.find('.logoutSection')).toHaveLength(1);
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const context = {
      user: { isLoggedIn: true, email: 'test@example.com' },
      logOut: logOutSpy,
    };
    const wrapper = mount(<Header />, { context });
    wrapper.find('.logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
