import React from "react";
import Pizza from "./PizzaComp";

/**
 * Render a menu component with a list of pizzas.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.pizzaData - An array of pizza data.
 * @return {JSX.Element} The rendered menu component.
 */
function Menu(props) {
  const pizzas = props.pizzaData;
  const numPizzas = pizzas.length;

  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      )} */}
      {numPizzas > 0 ? (
        // fragment
        <>
          <p>
            Authentic italian pizza. 6 crative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>No pizzas available.</p>
      )}
    </menu>
  );
}

export default Menu;
