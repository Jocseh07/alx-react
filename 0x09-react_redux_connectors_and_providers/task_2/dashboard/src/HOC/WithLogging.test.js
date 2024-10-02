import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from '../HOC/WithLogging';

console.log = jest.fn();
describe('WithLogging HOC', () => {
  afterEach(() => {
    console.log.mockRestore();
  });

  it('should call console.log on mount and unmount with Component when wrapped element is pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
  });
});

describe('WithLogging HOC', () => {
  afterEach(() => {
    console.log.mockRestore();
  });

  it('should call console.log on mount and unmount with the name of the component when wrapped element is Login component', () => {
    const Login = () => <p>Login component</p>;
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      'Component Login is going to unmount',
    );
  });
});
