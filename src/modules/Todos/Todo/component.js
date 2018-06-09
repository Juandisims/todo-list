import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ text, selected, onClickDelete, onClickSelected }) => {
  return (
    <li
      className={selected ? 'todo-item selected' : 'todo-item'}
      onClick={onClickSelected}
    >
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

Todo.displayName = 'Todo';
