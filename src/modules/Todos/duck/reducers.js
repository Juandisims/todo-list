import types from './types';

import { uniqueId } from 'lodash';

const initialState = {
  newTodoValue: '',
  todoList: [
    {
      id: uniqueId(),
      text: 'Add your first todo'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_TODO_VALUE:
      return {
        newTodoValue: action.text,
        todoList: state.todoList
      };

    case types.ADD_TODO:
      return {
        newTodoValue: '', // we should also clear the value of the input field
        todoList: [
          ...state.todoList,
          {
            text: state.newTodoValue, // save the value of the new todo input
            id: uniqueId()
          }
        ]
      };

    case types.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.id)
      };

    default:
      return state;
  }
};
