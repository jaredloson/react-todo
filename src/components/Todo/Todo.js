import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'react-classset';
import check from '../../images/check.png';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      item: {},
      loading: false
    }
    this.toggleItem = this.toggleItem.bind(this);
  }

  componentDidMount() {
    console.log(this.props.item);
    this.setState({item: this.props.item});
  }

  toggleItem() {
    const item = this.state.item;
    item.completed = !this.state.item.completed;
    this.setState({item: item});
  }

  render() {

    const showCompleted = (this.state.item.completed && !this.state.loading) || (!this.state.item.completed && this.state.loading);

    const todoClasses = classSet({
      'Todo': true,
      'Todo--completed': showCompleted,
      'Todo--loading': this.state.loading
    });

    return (
      <div className={todoClasses} onClick={this.toggleItem}>
        <div className="Todo__inner">
          <div className="Todo__checkbox" style={{backgroundImage: showCompleted ? `url(${check})` : 'url()'}}></div>
          <div className="Todo__text">{this.state.item.text}</div>
        </div>
      </div>
    );

  }
}

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default Todo;
