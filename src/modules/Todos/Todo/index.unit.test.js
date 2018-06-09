import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from './index';

const props = {
  text: 'Sample Text',
  onClickDelete: jest.fn()
};

describe('ToDo', () => {
  const todo = shallow(<Todo {...props} />);
  it('renders the ToDo structure', () => {
    expect(todo.exists());
  });

  it('Has the correct text', () => {
    expect(todo.find('.todo-item').text()).toEqual(props.text + '×');
  });

  describe('when click on de × icon', () => {
    beforeAll(() => {
      todo.find('span').simulate('click');
    });
    it('expect to call onClickDelete function', () => {
      expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    });
  });
});
