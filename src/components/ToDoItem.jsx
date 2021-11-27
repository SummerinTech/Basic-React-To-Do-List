import React from "react";

export default function ToDoItem(props) {
  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.toDo}
    </li>
  );
}
