import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid';

import './Todo.css';

class Todo extends Component {

    state = {
        todos: [
            {
              task: 'Organize Garage',
              id: 1,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 2,
              completed: false
            }
          ]
          
    }
    
    addTodo = (todo) => {
      todo.id = uuid();
      const todos = [...this.state.todos, todo];
      this.setState({
          todos: todos
      })
    }

    setStatus = (id) => {
       this.setState(prevState => {
           return {
               todos: prevState.todos.map(todo => {
                   if(todo.id === id){
                       return {
                           ...todo,
                           completed: !todo.completed
                       };
                   }else{
                       return todo
                   }
               })
           }
       })
    }

    removeTodo = () => {
      const removeMe = this.state.todos.filter(item => {
          return !item.completed 
      })
      this.setState({
           todos: removeMe
      })
    }

  render() {
    return (
      <div>
          <TodoList todos={this.state.todos} setStatus={this.setStatus}/>
          <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
          <button onClick={this.removeTodo}>Remove</button>
      </div>
    )
  }
}

export default Todo;
