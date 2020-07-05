import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be the same as the prior snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a <div> with a className .main-container', () => {
    const div = wrapper.find('div.main-container');
    expect(div.hasClass('main-container')).toBe(true);
  })
});