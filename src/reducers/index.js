import { uniqueId } from 'lodash';

// This will contain a series of methods that will mutate the state
export default (state, action) => {

  switch(action.type) {

    // Add todo mutator
    case 'addTodo':
      return {
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
        todos: state.todos.filter((item) => item.id !== action.id)
      }
      break;

    default:
      return state;
  }
}