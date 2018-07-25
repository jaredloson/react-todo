import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoInput } from './TodoInput';

configure({ adapter: new Adapter() });

describe('Add Item Input', () => {

  const mockSubmitFn = jest.fn();
  const wrapper = shallow(<TodoInput handleSubmit={mockSubmitFn} />);
  const input = wrapper.find('input');
  const instance = wrapper.instance();

  it('updates state on focus', () => {

    input.simulate('focus');
    expect(instance.state.focused).toBe(true);
    
    input.simulate('blur');
    expect(instance.state.focused).toBe(false);

  });

  it('updates state on text change', () => {    
    const mockText = 'mock text';
    input.simulate('change', { target: { value: mockText } });
    expect(instance.state.text).toBe(mockText);
  });

  it('calls a handleSubmit function on submit', () => {

    wrapper.find('input').simulate('keyDown', { keyCode: 13 });
    expect(mockSubmitFn.mock.calls.length).toBe(1);

    wrapper.find('button').simulate('click');
    expect(mockSubmitFn.mock.calls.length).toBe(2);

  });

});

