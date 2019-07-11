import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link } from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { writer } from 'repl';
configure({ adapter: new Adapter() });
//expect(wrapper.find('.App-header).exists()).toBe(true) to find exact element which has this className
describe('App', () => {
  const wrapper = shallow(<App />);
  //console.log(wrapper.debug())
  it('should has p', () => {
    //expect(wrapper.find('.App-header').length).toBe(1)
    //expect(wrapper.find('ul').children().length).toBe(3)
    //expect(wrapper.find('ul').hasClass('naser')).toBe(true)
    expect(wrapper.find('h1').text()).toBe(
      'Edit src/App.js and save to reload.'
    );
  });
  it('snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  //simulate a button
  it('on button click', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('yes');
  });
  //on change
  it('on change', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'masri' } });
    expect(wrapper.find('h2').text()).toBe('masri');
  });
  //new state
  it('update className',()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.find('.blue').length).toBe(1)
    expect(wrapper.find('.red').length).toBe(0)
    wrapper.setState({mainColor: 'red'})
    expect(wrapper.find('.blue').length).toBe(0)
    expect(wrapper.find('.red').length).toBe(1)
  })
});

describe('render the new component', () => {
  it('link component', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });
  it('a tag renders href', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.props().href).toBe('www.google.com');
  });
  it('return null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });
});
