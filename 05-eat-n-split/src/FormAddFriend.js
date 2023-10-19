import React, { useState } from "react";
import Button from "./Button";

/**
 * Handles the form submission for adding a new friend.
 *
 * @param {function} onAddFriend - The callback function to add a new friend to the list.
 * @return {void}
 */
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    // create a new friend
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    console.log("newFriend", newFriend);

    // add the new friend to the list of friends
    onAddFriend(newFriend);

    // reset the form fields on submit
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  // return a form for adding a new friend
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
