import React from "react";

/**
 * Renders an Order component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.closeHour - The closing hour of the store.
 * @return {JSX.Element} - The rendered Order component.
 */
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
