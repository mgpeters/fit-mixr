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

  it('should have a <div> with a className .notFound-page', () => {
    const div = wrapper.find('div.notfound-page');
    expect(div.hasClass('notfound-page')).toBe(true);
  })

  it('should have a <main> section with a className .notFound-body', () => {
    const main = wrapper.find('main');
    expect(main.hasClass('notfound-body')).toBe(true);
  })

  it('should have a <div> with a className .container', () => {
    const div = wrapper.find('div.container');
    expect(div.hasClass('container')).toBe(true);
  })

  it('should have an h2 with the className .page-header', () => {
    const h2 = wrapper.find('h2');
    expect(h2.hasClass('page-header')).toBe(true);
  });

  it('should have an h2 with the className .sred', () => {
    const h2 = wrapper.find('h2');
    expect(h2.hasClass('sred')).toBe(true);
  });

  it('should have an h2 with the text: 404 Not Found Title', () => {
    const h2 = wrapper.find('h2');
    expect(h2.text()).toEqual('404 Not Found');
  });

  it('should have an h4 with the page error message', () => {
    const h4 = wrapper.find('h4');
    expect(h4.text()).toEqual(`Sorry! The page that you are looking for has been moved, removed, or does not exist.`);
  });
});
