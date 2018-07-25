import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import TodoInput from '../TodoInput/TodoInput';

export class TodoList extends Component {

  render() {

    return (
     
      <div className="TodoList">

        <TodoInput />

        {this.props.items.length > 0 ? (
          this.props.items.map( (item, idx) =>
            <TodoItem
              key={item.id}
              {...item}
              toggleItem={this.props.toggleItem}
            />
          )
        ) : (
          <div className="TodoList__no-items">Add your first todo</div>
        )}

      </div>

    );

  }

}

const mapStateToProps = state => ({
  items: [...state.items]
});

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch({type: 'TOGGLE_ITEM', id: id})
});

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  toggleItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);