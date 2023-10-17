import React, { useState } from "react";

/**
 * Renders a form component for adding items.
 *
 * @param {function} onAddItem - Callback function to add a new item to the list.
 * @return {JSX.Element} The form component.
 */
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /**
   * Handles the form submit event.
   *
   * @param {Event} event - The form submit event object.
   * @return {void} This function does not return anything.
   */
  function handleFormSubmit(event) {
    // no reload
    event.preventDefault();

    // validate input
    if (!description) return;

    // create new item object
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);

    // add new item to list
    onAddItem(newItem);

    // clear form input values
    setDescription("");
    setQuantity(1);
  }

  // return form component
  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3>What do you need for your trip 🛄?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 50 }, (_, index) => index + 1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
