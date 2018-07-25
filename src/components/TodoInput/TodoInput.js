import React, { Component } from 'react';
import { connect } from 'react-redux';
import classSet from 'react-classset';

export class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      focused: false
    }
    this.toggleInputFocus = this.toggleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleInputFocus() {
    this.setState({focused: !this.state.focused});
  }

  handleInputChange(event) {
    this.setState({text: event.target.value});
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.handleSubmit(this);
    }
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
          onKeyDown={this.handleKeyDown}
        />
        <button
          className={buttonClasses}
          onClick={() => this.props.handleSubmit(this) }
        >
          Add To Do
        </button>
      </div>
    );

  }

}

//by passing handleSubmit function as a prop
//we can then pass-in a mock function in our unit test
const mapDispatchToProps = dispatch => ({
  handleSubmit: (context) => {
    const text = context.state.text.trim();
    if (text.length > 0) {
      dispatch({type: 'ADD_ITEM', text});
      context.setState({text: ''});
    }
  }
});

export default connect(null, mapDispatchToProps)(TodoInput);