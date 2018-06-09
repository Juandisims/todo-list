import types from './types';

import { uniqueId } from 'lodash';
import { updateNewTodoValue } from './actions';

const initialState = {
  newTodoValue: '',
  todoList: [
    {
      id: uniqueId(),
      text: 'Add your first todo'
    }
  ],
  selectedTodoId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_TODO_VALUE:
      return {
        ...state,
        newTodoValue: action.text,
        todoList: state.todoList
      };

    case types.ADD_TODO:
      return {
        ...state,
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

    case types.SELECT_TODO:
      return {
        ...state,
        selectedTodoId: action.id,
        newTodoValue: state.todoList.filter(item => item.id === action.id)[0]
          .text
      };

    case types.DESELECT_TODO:
      return {
        ...state,
        selectedTodoId: null,
        newTodoValue: ''
      };

    case types.UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(
          item =>
            item.id !== state.selectedTodoId
              ? item
              : { ...item, text: state.newTodoValue }
        ),
        selectedTodoId: null,
        newTodoValue: ''
      };

    default:
      return state;
  }
};
