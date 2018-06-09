import React from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const Todos = ({ todos, newTodoValue, actions }) => (
  <div className="todo-list">
    <h1>todos</h1>
    <p>{todos.length} remaining</p>
    <TodoList todos={todos} actions={actions} />
    <TodoForm newTodoValue={newTodoValue} actions={actions} />
  </div>
);
