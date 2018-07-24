import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from '../TodoList/TodoList';

const initialState = {
  items: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newItem = {
        id: state.items.length,
        text: action.text,
        completed: false
      }
      return {...state, items: [...state.items, newItem]};

    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;
