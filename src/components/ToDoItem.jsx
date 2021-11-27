import React from "react";

export default function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.toDo}
    </li>
  );
}
