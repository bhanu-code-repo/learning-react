import React from "react";

function Item({ item, onDeleteItem, onTogglePacked }) {
  // return item component
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onTogglePacked(item.id);
        }}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
