import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends Component {

  state = {
    newTodoValue: ''
  }

  handleChange = (evt) => {
    this.setState({
      newTodoValue: evt.target.value
    });
  }

  handleClickAdd = () => {

    // Add new item to todo list
    this.props.actions.addTodo(this.state.newTodoValue);

    // Clear value of input
    this.setState({
      newTodoValue: ''
    });
  }

  render() {
    const { newTodoValue } = this.state;

    return <div className="todo-input">
      <input
        onChange={this.handleChange}
        placeholder="..."
        type="text"
        value={newTodoValue}/>

      <button onClick={this.handleClickAdd}>Add</button>
    </div>
  }
}

TodoForm.propTypes = {
  actions: PropTypes.object.isRequired
}