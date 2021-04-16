import React from "react";
import {TodoItem} from "./TodoItem";
 
export const Todos = (props) => {
  let myStyle={
    minHeight:"60vh",
    margin:"40px auto",
    background:'linear-gradient(125deg,black 38%,white 90%)',
  }
  
  return (<div className="container" style={myStyle}>
    <h3 className='text-center text-light'>Todos List </h3>
    {props.todos.length===0?"No Todos to display":props.todos.map((todo)=>{
          return  (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
    })}
  </div>);
};
