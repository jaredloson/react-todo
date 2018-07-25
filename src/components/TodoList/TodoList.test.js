import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import configureStore from 'redux-mock-store';
//import renderer from 'react-test-renderer';
import { TodoList } from './TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

configure({ adapter: new Adapter() });

describe('TodoList', () => {

  it('renders a list from props', () => {
    const items = [
      {id: 0, text: 'mock item', completed: false},
      {id: 1, text: 'mock item2', completed: false}
    ]
    const mockToggleFn = jest.fn();
    const wrapper = shallow(<TodoList items={items} toggleItem={mockToggleFn} />);
    expect(wrapper.find(TodoItem).length).toBe(items.length);
  });

});