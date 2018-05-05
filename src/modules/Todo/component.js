import React from 'react';
import PropTypes from 'prop-types';

export const TodoComponent = ({ text, onClickDelete }) => {
  return (
    <li className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </li>
  );
}

TodoComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

TodoComponent.displayName = 'Todo';
