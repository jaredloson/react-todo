import React, { Component } from 'react';
import { connect } from 'react-redux';
import classSet from 'react-classset';

class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      focused: false
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
    this.setState({focused: !this.state.focused});
  }

  handleInputChange(event) {
    this.setState({text: event.target.value});
  }

  handleKeypress(event) {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const text = this.state.text.trim();
    if (text.length === 0) return;
    this.props.dispatch({type: 'ADD_ITEM', text});
    this.setState({text: ''});
  }

  render() {

    const inputWrapClasses = classSet({
      'TodoInput': true,
      'TodoInput--focused': this.state.focused
    });

    const buttonClasses = classSet({
      'TodoInput__button': true,
      'TodoInput__button--disabled': !this.state.text
    })

    return (
      <div className={inputWrapClasses}>
        <input
          className="TodoInput__input"
          type="text"
          placeholder="Add a to do..."
          value={this.state.text}
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

export default connect()(TodoInput);