import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo/Todo';
import TodoInput from '../TodoInput/TodoInput';

class TodoList extends Component {

  constructor() {
    super();
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(id) {
    this.props.dispatch({type: 'TOGGLE_ITEM', id: id})
  }

  render() {

    return (
     
      <div className="TodoList">

        <TodoInput />

        {this.props.items.length > 0 ? (
          this.props.items.map( (item, idx) =>
            <Todo
              key={item.id}
              {...item}
              toggleItem={this.toggleItem}
            />
          )
        ): (
          <div className="TodoList__no-todos">Add your first todo</div>
        )}

      </div>

    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(TodoList);