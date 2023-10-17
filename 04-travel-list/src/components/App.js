import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

/**
 * Adds an item to the items array.
 *
 * @param {any} item - The item to be added.
 * @return {void} This function does not return a value.
 */
function App() {
  // initialize items state
  const [items, setItems] = useState([]);

  /**
   * Adds an item to the items array.
   *
   * @param {any} item - The item to be added.
   * @return {void} This function does not return a value.
   */
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  /**
   * Deletes an item from the list of items.
   *
   * @param {number} id - The ID of the item to be deleted.
   * @return {Array} - The updated list of items after deletion.
   */
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  /**
   * Handles the toggle packed functionality for a specific item.
   *
   * @param {number} id - The ID of the item to toggle packed.
   * @return {void} No return value.
   */
  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  /**
   * Clear the list of items.
   *
   * @return {void}
   */
  function handleClearList() {
    // confirm with user that they want to clear the list
    const confirm = window.confirm(
      "Are you sure you want to clear the list? This cannot be undone!"
    );

    // if confirmed
    if (confirm) setItems([]);
  }

  // return app component
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
