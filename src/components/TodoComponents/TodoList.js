// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

const TodoList = ({todos,setStatus}) => {
   
    const todosList = todos.length ? (

        todos.map(todo => {
            return (
                <div key={todo.id}>
                     <p onClick={() =>{setStatus(todo.completed)}}>{todo.task}</p>  
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