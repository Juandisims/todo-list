import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from './index';

const props = {
  todos: [],
  actions: {
    addTodo: jest.fn(),
    updateNewTodoValue: jest.fn()
  }
};
describe('TodoList', () => {
  const todo = shallow(<TodoList {...props} />);
  it('renders the TodoList structure', () => {
    expect(todo.exists());
  });
});
