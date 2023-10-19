import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // define state for friends and selected friend
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * Handles the event of showing or hiding the "Add Friend" component.
   *
   * @return {void} No return value.
   */
  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  /**
   * Adds a new friend to the list of friends and hides the "Add Friend" form.
   *
   * @param {any} newFriend - The new friend to be added.
   * @return {undefined} This function does not return a value.
   */
  function handleAddFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  }

  /**
   * Handles the selection of a friend.
   *
   * @param {Object} friend - The friend object to be selected.
   */
  function handleSelectFriend(friend) {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  /**
   * Handles splitting the bill and updating the friends' balances.
   *
   * @param {number} value - The value to be added to the selected friend's balance.
   * @return {void} - This function does not return anything.
   */
  function handleSplitBill(value) {
    setFriends((prev) =>
      prev.map((friend) => {
        if (friend.id === selectedFriend.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  // return the app component
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onHandleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
