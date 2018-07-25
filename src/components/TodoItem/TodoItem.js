import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classSet from 'react-classset';
import check from '../../images/check.png';

export class TodoItem extends PureComponent {

  render() {

    const todoClasses = classSet({
      'TodoItem': true,
      'TodoItem--completed': this.props.completed,
    });

    return (
      <div className={todoClasses} onClick={ () => this.props.toggleItem(this.props.id) }>
        <div className="TodoItem__inner">
          <div className="TodoItem__checkbox" style={{backgroundImage: this.props.completed ? `url(${check})` : 'url()'}}></div>
          <div className="TodoItem__text">{this.props.text}</div>
        </div>
      </div>
    );

  }

}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default TodoItem;