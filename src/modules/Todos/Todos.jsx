import React from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const Todos = ({ todos, newTodoValue, selectedTodo, actions }) => (
  <div className="todo-list">
    <h1>todos</h1>
    <p>{todos.length} remaining</p>
    <TodoList todos={todos} selectedTodo={selectedTodo} actions={actions} />
    <TodoForm
      newTodoValue={newTodoValue}
      selectedTodo={selectedTodo}
      actions={actions}
    />
  </div>
);
