import React from "react";

/**
 * Renders the statistics of the packing list.
 *
 * @param {Object} items - The list of items to be packed.
 * @return {JSX.Element} The JSX element representing the statistics.
 */
function Stats({ items }) {
  // if no items
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>No items to pack. Start adding some to the list.</em>
      </p>
    );
  }

  // calculate stats
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  // return stats component
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "🎉 You packed everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked}(${percentPacked}%) of them.`}
      </em>
    </footer>
  );
}

export default Stats;
