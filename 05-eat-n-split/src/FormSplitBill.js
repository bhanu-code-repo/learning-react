import React, { useState } from "react";
import Button from "./Button";

/**
 * Renders a form for splitting a bill with a selected friend.
 *
 * @param {object} selectedFriend - The selected friend object.
 * @param {function} onHandleSplitBill - The callback function for handling the split bill.
 * @return {JSX.Element} The rendered form component.
 */
function FormSplitBill({ selectedFriend, onHandleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("me");

  /**
   * Handles the form submission event.
   *
   * @param {Event} e - The form submission event.
   * @return {void} This function does not return a value.
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) {
      return;
    }

    onHandleSplitBill(whoIsPaying === "me" ? paidByFriend : -paidByUser);
  }

  // return a form for splitting a bill
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the Bill with {selectedFriend.name}</h2>
      <label>💰Bill Amount:</label>
      <input
        type="text"
        id="bill"
        name="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️Your Expense:</label>
      <input
        type="text"
        id="my-expense"
        name="my-expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫{selectedFriend.name} Expense:</label>
      <input
        type="text"
        id="friend-expense"
        name="friend-expense"
        disabled
        value={paidByFriend}
      />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="me">Me</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
