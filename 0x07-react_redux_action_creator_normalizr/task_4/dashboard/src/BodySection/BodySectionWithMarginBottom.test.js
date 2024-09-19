import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('should render a BodySection component and pass props correctly', () => {
    const title = 'Test Title';
    const children = <p>Test Content</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>,
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).prop('title')).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toEqual(true);
  });
});
