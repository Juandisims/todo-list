import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({ newTodoValue, actions }) => (
  <div className="todo-input">
    <input
      onChange={evt => actions.updateNewTodoValue(evt.target.value)}
      placeholder="..."
      type="text"
      value={newTodoValue}
    />

    {newTodoValue.length === 0 ? (
      <button disabled>Add</button>
    ) : (
      <button onClick={() => actions.addTodo()}>Add</button>
    )}
  </div>
);

TodoForm.propTypes = {
  newTodoValue: PropTypes.string,
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    updateNewTodoValue: PropTypes.func.isRequired
  })
};
