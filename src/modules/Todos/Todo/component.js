import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({
  text,
  selected,
  onClickDelete,
  onClickSelected,
  onClickDeselected
}) => {
  return (
    <li className={selected ? 'todo-item selected' : 'todo-item'}>
      <div onClick={selected ? onClickDeselected : onClickSelected}>{text}</div>
      <span onClick={onClickDelete}>&times;</span>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickDeselected: PropTypes.func.isRequired
};

Todo.displayName = 'Todo';
