import React from "react";
import Item from "./Item";
import { useState } from "react";

/**
 * Render a packing list component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {array} props.items - An array of items to be rendered in the list.
 * @return {JSX.Element} - The rendered packing list component.
 */
function PackingList({ items, onDeleteItem, onTogglePacked, onClearList }) {
  // initialize state for sorting
  const [sortBy, setSortBy] = useState("input");

  // sort items
  let sortedItems;
  if (sortBy === "description") {
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  // return packing list component
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
