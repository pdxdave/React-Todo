// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'

const TodoList = ({todos,setStatus}) => {
   
    let strike = todos.completed ? 'strike' : ''
    
    const todosList = todos.length ? (

        todos.map(todo => {
            return (
                <div key={todo.id} className={`${strike}`}>
                     <p onClick={() => {setStatus(todo.id)}} >{todo.task}</p>  
                </div>
            )
        })
    ) : (
        <p>All the todos are done</p>
    );

  return (
    <div>
       {todosList}
    </div>
  )
}

export default TodoList;