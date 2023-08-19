import React,{useState} from "react";


export const AddTodo = (props) => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank");
    }else{
      props.addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }
  let mystyle = {
    width : "100%",
    margin : "auto"
  }
  return (
    <div className="container my-3" style = {{width : "50%",margin:"auto"}} >
      <h3>Add a Todo</h3>
      <form className = "mx-auto" onSubmit={submit} style={mystyle}>
        <div className="mb-3">
          <label htmlFor="title">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Start typing here..."/>

        </div>
        <div className="mb-3">
          <label htmlFor="desc">Todo description</label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="A short description"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success btn-sm"> Add Todo </button>
        </div>
      </form>
    </div>
  );
};
