import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import { TodoList } from '../TodoList/index';

export class App extends Component {

  state = {
    newTodoValue: '',
    todos: [{
      id: uniqueId(), // add ID to initial Todo item
      text: 'Add your first todo'
    }]
  }

  handleChange = event => this.setState({
    newTodoValue: event.target.value
  });

  handleClickAdd = () => {
    const { newTodoValue, todos } = this.state;

    // Ensure the Todo item exists
    if (Boolean(newTodoValue) === false) {
      return false;
    }

    this.setState({
      newTodoValue: '', // we need to clear the input to add new todo items
      todos: [
        ...todos,
        {
          text: newTodoValue,
          id: uniqueId()
        }
      ]
    });
  };

  handleClickDelete = todoItemId => {
    /* eslint-disable */
    console.log(`Deleting todo number ${todoItemId}`);
    /* eslint-enable */
    const { todos } = this.state;

    this.setState({
      // Its better to filter the existing array and return back an array
      // without the item to be removed,
      // also better to compare with an ID rather than index
      todos: todos.filter((item) => item.id !== todoItemId)
    });
  }

  render() {
    // We can remove the forEach since the ids already exist for each todo item
    const { newTodoValue, todos } = this.state;

    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p>{todos.length} remaining</p>

        <TodoList todos={todos} handleClickDelete={(id) =>
          this.handleClickDelete(id)}></TodoList>

        <div className="todo-input">
          <input
            onChange={this.handleChange}
            placeholder="..."
            type="text"
            value={newTodoValue}/>

          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    )
  }

}
