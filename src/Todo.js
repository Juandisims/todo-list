import React, { Component } from 'react';

export class Todo extends Component {
  render () {
    const { text, onClickDelete } = this.props;
    return (
      <li className="todo-item">
        {text}
        <span onClick={onClickDelete}>&times;</span>
      </li>
    );
  }
}
