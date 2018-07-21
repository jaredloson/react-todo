import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'react-classset';

class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: '',
      inputFocused: false
    }
    this.toggleInputFocus = this.toggleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  toggleInputFocus() {
    this.setState({inputFocused: !this.state.inputFocused});
  }

  handleInputChange(event) {
    this.setState({newTodo: event.target.value});
  }

  handleKeypress(event) {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (!this.state.newTodo) return;
    this.props.onSubmit(this.state.newTodo);
    this.setState({newTodo: ''});
  }

  render() {

    const inputWrapClasses = classSet({
      'TodoInput': true,
      'TodoInput--focused': this.state.inputFocused
    });

    const buttonClasses = classSet({
      'TodoInput__button': true,
      'TodoInput__button--disabled': !this.state.newTodo
    })

    return (
      <div className={inputWrapClasses}>
        <input
          className="TodoInput__input"
          type="text"
          placeholder="Add a to do..."
          value={this.state.newTodo}
          onFocus={this.toggleInputFocus}
          onBlur={this.toggleInputFocus}
          onChange={this.handleInputChange}
        />
        <button
          className={buttonClasses}
          onClick={this.handleSubmit}
        >
          Add To Do
        </button>
      </div>
    );

  }

}

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoInput;