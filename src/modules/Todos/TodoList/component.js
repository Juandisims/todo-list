import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/index';

export const TodoComponent = ({ todos, selectedTodo, actions }) => {
  return (
    <ul>
      {todos.length > 0
        ? todos.map(todoItem => (
            <Todo
              selected={todoItem.id === selectedTodo}
              key={todoItem.id}
              onClickSelected={() => actions.selectTodo(todoItem.id)}
              onClickDelete={() => actions.removeTodo(todoItem.id)}
              text={todoItem.text}
            />
          ))
        : "You're all done 🌴"}
    </ul>
  );
};

TodoComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

TodoComponent.displayName = 'TodoList';
