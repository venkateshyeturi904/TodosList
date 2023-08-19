import React from 'react'
const v = require("./Header")

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div style={{width:"100%",margin : "auto", display:"flex"}}>
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
        </div>
        <button className="btn btn-sm btn-danger my-4 ms-auto" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
    <div><hr/></div>
    </>
  )
}

