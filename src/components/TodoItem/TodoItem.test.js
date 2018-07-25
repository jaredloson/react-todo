import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './TodoItem';

configure({ adapter: new Adapter() });

describe('Todo Item', () => {

  it('calls the toggleItem function when clicked', () => {

    const mockToggleFn = jest.fn();
    const props = {id: 0, text: 'todo item', completed: false};
    const wrapper = shallow(<TodoItem {...props} toggleItem={mockToggleFn} />);

    wrapper.find('.TodoItem').simulate('click');
    expect(mockToggleFn.mock.calls.length).toBe(1);

  });

});