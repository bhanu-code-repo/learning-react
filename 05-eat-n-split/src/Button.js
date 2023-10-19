import React from "react";

/**
 * Render a button component.
 *
 * @param {Object} props - The properties of the button component.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {ReactNode} The rendered button component.
 */
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
