import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((prevItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ol>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              toDo={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;