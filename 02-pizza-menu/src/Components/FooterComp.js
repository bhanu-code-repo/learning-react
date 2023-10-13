import React from "react";
import Order from "./OrderComp";

/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The footer component.
 */
function Footer() {
  const hour = new Date().getHours();
  const closeHour = 22;
  const isOpen = hour >= 12 && hour < closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <div>
            <p>
              We are currently closed. Our opening hours are from 12:00-22:00.
            </p>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Footer;
