import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  // declare a new state variable, which we'll call `currentOpen`
  const [currentOpen, setIsOpen] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          currentOpen={currentOpen}
          onOpen={setIsOpen}
          title={item.title}
          num={index < 9 ? `0${index + 1}` : index + 1}
        >
          {<p>{item.text}</p>}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
