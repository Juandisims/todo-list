
// redux actions, these will call the mutators to change the state
export const addTodo = () => {
  return {
    type: 'addTodo'
  }
}
export const removeTodo = id => {
  return {
    type: 'removeTodo',
    id
  }
}

export const updateNewTodoValue = text => {
  return {
    type: 'updateNewTodoValue',
    text
  }
}