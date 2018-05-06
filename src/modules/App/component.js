import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash';

import * as TodoActions from '../../actions/index'

import { TodoList } from '../TodoList/index';
import { TodoForm } from '../TodoForm/index';

const AppComponent = ({ todos, actions }) => {

  return (
    <div className="todo-list">
      <h1>todos</h1>
      <p>{todos.length} remaining</p>

      <TodoList todos={todos} actions={actions}></TodoList>

      <TodoForm actions={actions}></TodoForm>
    </div>
  )
}

const stateToProps = state => ({
  todos: state.todos
})

const actions = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export const App = connect(
  stateToProps,
  actions
)(AppComponent)
