import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from './index';

const props = {
  newTodoValue: '',
  actions: {
    addTodo: jest.fn(),
    updateNewTodoValue: jest.fn()
  }
};
describe('TodoForm', () => {
  const todo = shallow(<TodoForm {...props} />);
  it('renders the TodoForm structure', () => {
    expect(todo.exists());
  });
});
