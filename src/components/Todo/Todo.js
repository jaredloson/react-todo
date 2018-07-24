import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classSet from 'react-classset';
import check from '../../images/check.png';

class Todo extends PureComponent {

  handleClick() {
    this.props.toggleItem(this.props.id);
  }

  render() {

    const todoClasses = classSet({
      'Todo': true,
      'Todo--completed': this.props.completed,
    });

    return (
      <div className={todoClasses} onClick={ () => this.handleClick() }>
        <div className="Todo__inner">
          <div className="Todo__checkbox" style={{backgroundImage: this.props.completed ? `url(${check})` : 'url()'}}></div>
          <div className="Todo__text">{this.props.text}</div>
        </div>
      </div>
    );

  }

}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default Todo;