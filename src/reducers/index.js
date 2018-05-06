import { uniqueId } from 'lodash';

const initialState = {
  newTodoValue: '',
  todos: [{
    id: uniqueId(),
    text: 'Add your first todo'
  }]
}

// This will contain a series of methods that will mutate the state
export default (state = initialState, action) => {

  switch(action.type) {

    case 'updateNewTodoValue':
      return {
        newTodoValue: action.text,
        todos: state.todos
      }
      break;

    // Add todo mutator
    case 'addTodo':
      return {
        newTodoValue: '', // we should also clear the value of the input field
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: uniqueId()
          }
        ]
      }
      break;

    // remove todo mutator
    case 'removeTodo':
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id)
      }
      break;

    default:
      return state;
  }
}