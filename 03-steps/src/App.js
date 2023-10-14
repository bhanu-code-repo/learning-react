import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // react hooks
  const [step, setStep] = useState(1); //step
  const [isOpen, setIsOpen] = useState(true); //isOpen

  /**
   * Handles the previous step in the process.
   *
   * @return {undefined} No return value.
   */
  function handlePrevious() {
    setStep(step <= 1 ? 1 : step - 1);
  }

  /**
   * Handles the next step in the process.
   *
   * @return {undefined} No return value.
   */
  function handleNext() {
    setStep(step >= 3 ? 3 : step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
