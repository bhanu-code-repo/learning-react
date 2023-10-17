import React from "react";

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, color: textColor }}>
      {children}
    </button>
  );
}

export default Button;
