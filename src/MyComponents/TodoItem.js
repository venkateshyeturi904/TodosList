import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div style={{width:"100%",margin : "auto"}}>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

