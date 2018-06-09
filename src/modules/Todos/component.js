import { Todos } from './Todos.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './duck/actions';

export default connect(
  state => {
    return {
      todos: state.todos.todoList,
      newTodoValue: state.todos.newTodoValue
    };
  },
  dispatch => {
    return { actions: bindActionCreators(TodoActions, dispatch) };
  }
)(Todos);
