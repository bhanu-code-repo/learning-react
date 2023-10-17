import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          num={index < 9 ? `0${index + 1}` : index + 1}
          text={<p>{item.text}</p>}
        />
      ))}
    </div>
  );
}

export default Accordion;
