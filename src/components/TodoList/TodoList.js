import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import TodoInput from '../TodoInput/TodoInput';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      loading: true
    }
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  addItem(val) {
    const items = this.state.items.slice();
    items.push({
      id: this.state.items.length,
      text: val,
      completed: false
    });
    this.setState({items: items});
  }

  render() {

    return (
     
      <div className="TodoList">

        <div className="TodoList__clear" onClick={this.clearList}>Clear</div>

        <TodoInput onSubmit={this.addItem} />

        {this.state.items.length > 0 ? (
          this.state.items.map( (item, idx) =>
            <Todo
              key={item.id}
              item={item}
            />
          )
        ): (
          <div className="TodoList__no-todos">
            {this.state.loading ? 'Getting items...' : 'Add your first todo'}
          </div>
        )}

      </div>

    );
  }
}

export default TodoList;