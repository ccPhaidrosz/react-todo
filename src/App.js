import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

// ~ 1hour: https://www.youtube.com/watch?v=sBws8MSXN7A&list=PLtHfroUV9pt-hgHafaZHi4eDVBbPuwKoY&index=3
class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Finish todo app',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Crete own react project',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Deploy to netlify',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
