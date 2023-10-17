import React from "react";

function AccordionItem({ num, title, currentOpen, onOpen, children }) {
  // declare a new variable, which we'll call `isOpen`
  const isOpen = num === currentOpen;

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => onOpen(num)}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
