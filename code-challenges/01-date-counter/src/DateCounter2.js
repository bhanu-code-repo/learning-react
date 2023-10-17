import React from "react";
import { useState } from "react";

/**
 * Resets the count and step values.
 *
 * @param {type} None
 * @return {type} None
 */
function Counter2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("october 14 2023");
  date.setDate(date.getDate() + count);

  /**
   * Resets the count and step values.
   *
   * @param {type} None
   * @return {type} None
   */
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <h1>Date Counter 2</h1>
      <div>
        <input
          type="range"
          min="0"
          max="20"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        Step: {step}
      </div>
      <div>
        <button onClick={() => setCount((cnt) => cnt - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={() => setCount((cnt) => cnt + step)}>+</button>
      </div>
      <p>
        <span style={{ color: "blue" }}>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span style={{ color: "blue" }}>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default Counter2;
