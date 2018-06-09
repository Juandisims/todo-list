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

export default {
  addTodo,
  removeTodo,
  updateNewTodoValue
};
