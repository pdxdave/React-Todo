import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        task: '',
        completed: false
    }

    handleSubmit = (e) => {
       e.preventDefault();
       this.props.addTodo(this.state);
       this.setState({
           task: ''
       })
    }

    handleChange = (e) => {
      this.setState({
          task: e.target.value
      })
    }

  render() {

 
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Enter a task</label>
              <input type="text" placeholder="task" onChange={this.handleChange} value={this.state.task}/>
              <button>Add Todo</button>
          </form>
      </div>
    )
  }
}

export default TodoForm;
