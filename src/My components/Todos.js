import React from "react";
import {TodoItem} from "./TodoItem";
 
export const Todos = (props) => {
  let myStyle={
    minHeight:"60vh",
    margin:"40px auto",
    background:'linear-gradient(160deg,rgba(99, 2, 128, 0.15) 25% ,rgba(0, 0, 255, 0.20) 75%)',
    border:"2px solid violet"
  }
  
  return (<div className="container" style={myStyle}>
    <h3 className='text-center text-light' style={{margin:'20px'}}>Todos List </h3>
    {props.todos.length===0?"No Todos to display":props.todos.map((todo)=>{
          return  (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
    })}
  </div>);
};
