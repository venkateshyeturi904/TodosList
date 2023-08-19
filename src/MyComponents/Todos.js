import React from 'react';
import {TodoItem} from '../MyComponents/TodoItem';

export const Todos = (props) => {
  let mystyle = {
    minHeight : "50vh",
    // margin : "10px auto"
    width : "50%",
    margin : "auto"
  }
  return (
    <div className="container my-2" style={mystyle}>
        <h3 className="my-3" > Todos List </h3>
        {
          props.todos.length === 0 ? "No Todos to display" : 
          props.todos.map(todo=>{
            return (
            
              <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/>
            
            ) 
          })
        }
    </div>
  )
}


