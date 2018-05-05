import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ text, onClickDelete }) => {
  return (
    <li className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </li>
  );
}

Component.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

Component.displayName = 'Todo';
