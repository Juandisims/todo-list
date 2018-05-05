import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ text, onClickDelete }) => {
  return (
    <li className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
}