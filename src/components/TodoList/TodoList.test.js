// Link.react.test.js
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import renderer from 'react-test-renderer';
import TodoList from './TodoList';

configure({ adapter: new Adapter() });

test('Calling the addItem method adds a todo item to state', () => {

  // create a TodoList wrapper
  const wrapper = shallow(<TodoList />);
  // call the addItem method
  const newItemText = 'test';
  wrapper.instance().addItem(newItemText);
  // grab the first item in state
  const newItem = wrapper.instance().state.items[0];
  // and make sure the text val equals the val we passed to addItem
  expect(newItem.text).toEqual(newItemText)
  
});