import { uniqueId } from 'lodash';

const initialState = {
  todos: [{
    id: uniqueId(),
    text: 'Add your first todo'
  }]
}

// This will contain a series of methods that will mutate the state
export default (state = initialState, action) => {

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