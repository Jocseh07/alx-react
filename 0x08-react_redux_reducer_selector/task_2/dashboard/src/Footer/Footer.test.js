import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { UserContext } from '../context/UserContext'; // Adjust the import path as necessary

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the contact link when the user is logged out', () => {
    const contextValue = { isLoggedIn: false };
    const wrapper = shallow(
      <UserContext.Provider value={contextValue}>
        <Footer />
      </UserContext.Provider>,
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });

  it('displays the contact link when the user is logged in', () => {
    const contextValue = { isLoggedIn: true };
    const wrapper = shallow(
      <UserContext.Provider value={contextValue}>
        <Footer />
      </UserContext.Provider>,
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });
});
