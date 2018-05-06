
// redux actions, these will call the mutators to change the state
export const addTodo = text => {
  return {
    type: 'addTodo',
    text
  }
}
export const removeTodo = id => {
  return {
    type: 'removeTodo',
    id
  }
}