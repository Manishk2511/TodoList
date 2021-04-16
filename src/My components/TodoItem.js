import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  let buttonStyle = {
    float: "right",
  };
  return (
    <>
      <div className="container bg-light text-dark py-2 px-4">
        <h4>
          {todo.title}
          <button
            style={buttonStyle}
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </h4>
        <p>{todo.desc}</p>
      </div>
      <hr />
    </>
  );
};
