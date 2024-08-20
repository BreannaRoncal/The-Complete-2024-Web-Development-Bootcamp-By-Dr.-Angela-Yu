import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(event) {
    const itemToAdd = event.target.value;
    setNewItem(itemToAdd);
  }

  function handleClick() {
    setListItem((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Next item"
          value={newItem}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
