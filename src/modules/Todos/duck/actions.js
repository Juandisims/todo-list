import types from './types';

export const addTodo = () => {
  return {
    type: types.ADD_TODO
  };
};
export const removeTodo = id => {
  return {
    type: types.REMOVE_TODO,
    id
  };
};

export const updateNewTodoValue = text => {
  return {
    type: types.UPDATE_NEW_TODO_VALUE,
    text
  };
};

export const selectTodo = id => {
  return { type: types.SELECT_TODO, id };
};

export const deselectTodo = id => {
  return { type: types.DESELECT_TODO };
};

export const updateTodo = () => {
  return { type: types.UPDATE_TODO };
};

export default {
  addTodo,
  removeTodo,
  updateNewTodoValue,
  selectTodo,
  deselectTodo,
  updateTodo
};
