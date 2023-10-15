import React, { useState } from "react";

function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

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

    // clear form input values
    setDescription("");
    setQuantity(1);

    // add new item to list
  }

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
