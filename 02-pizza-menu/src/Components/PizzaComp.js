import React from "react";

/**
 * Creates a Pizza component with the given properties.
 *
 * @param {object} props - The properties of the Pizza component.
 * @param {string} props.photoName - The name of the photo.
 * @param {string} props.name - The name of the pizza.
 * @param {string} props.ingredients - The ingredients of the pizza.
 * @param {number} props.price - The price of the pizza.
 * @param {boolean} props.soldOut - Indicates if the pizza is sold out.
 * @return {JSX.Element} The Pizza component.
 */
function Pizza({ photoName, name, ingredients, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {soldOut ? <span>SOLD OUT</span> : <span>${price.toFixed(2)}</span>}
      </div>
    </li>
  );
}

export default Pizza;
