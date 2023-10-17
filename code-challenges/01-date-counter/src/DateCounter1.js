import "./App.css";
import { useState } from "react";

/**
 * Generates a function comment for the given function body.
 *
 * @return {JSX.Element} The JSX element representing the DateCounter1 component.
 */
function DateCounter1() {
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
      <h1>Date Counter 1</h1>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((cnt) => cnt - step)}>-</button>
        <span> Count: {count} </span>
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

export default DateCounter1;
