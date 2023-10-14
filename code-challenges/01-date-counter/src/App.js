import "./App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("october 14 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <h1>Date Counter</h1>
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
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
