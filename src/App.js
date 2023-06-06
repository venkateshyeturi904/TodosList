import './App.css';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import {About} from "./MyComponents/About"
import { AddTodo } from './MyComponents/AddTodo';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo ;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  const onDelete = (todo)=>{
    const updatedTodos = todos.filter((t)=>t!==todo);
    setTodos(updatedTodos);
  }
  const addTodo=(title ,desc )=>{
    const mytodo = {'sno':todos.length+1 ,'title':title,'desc':desc};
    const updatedTodos = [...todos,mytodo]
    setTodos(updatedTodos);
  }
  return (
    <>
      <Router>
      <Header title="My Todos List" searchBar={true}/>
      <Switch>
        <Route exact path="/">
          <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
          </>
        </Route>
        <Route path="/About"> 
          <About/>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
