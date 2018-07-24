import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo/Todo';
import TodoInput from '../TodoInput/TodoInput';

class TodoList extends Component {

  render() {

    return (
     
      <div className="TodoList">

        <TodoInput />

        {this.props.items.length > 0 ? (
          this.props.items.map( (item, idx) =>
            <Todo
              key={item.id}
              item={item}
            />
          )
        ): (
          <div className="TodoList__no-todos">Add your first todo</div>
        )}

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(TodoList);