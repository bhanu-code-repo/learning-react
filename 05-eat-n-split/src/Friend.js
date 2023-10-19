import React from "react";
import Button from "./Button";

/**
 * Renders a friend component.
 *
 * @param {Object} friend - The friend object.
 * @param {Object} selectedFriend - The selected friend object.
 * @param {Function} onSelectFriend - The function to handle when a friend is selected.
 * @return {JSX.Element} The friend component.
 */
function Friend({ friend, selectedFriend, onSelectFriend }) {
  // check if friend is selected
  const isSelected = selectedFriend && selectedFriend?.id === friend.id;

  // return a list item for the friend component
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
