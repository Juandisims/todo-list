import React from 'react';
import { shallow } from 'enzyme';
import { Todos } from './Todos.jsx';

const props = {
  todos: [],
  newTodoValue: '',
  actions: {
    addTodo: jest.fn(),
    updateNewTodoValue: jest.fn()
  }
};
describe('Todos', () => {
  const todo = shallow(<Todos {...props} />);
  it('renders the Todos structure', () => {
    expect(todo.exists());
  });
});
