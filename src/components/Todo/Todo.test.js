import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import renderer from 'react-test-renderer';
import Todo from './Todo';

configure({ adapter: new Adapter() });

test('Calling toggleItem changes the completed value', () => {
  const item = {id: 0, text: 'val', completed: false};
  const wrapper = shallow(<Todo item={item} />);
  console.log(wrapper);
  wrapper.instance().toggleItem();
  expect(wrapper.instance().state.item.completed).toEqual(true);
  wrapper.instance().toggleItem();
  expect(wrapper.instance().state.item.completed).toEqual(false);
});