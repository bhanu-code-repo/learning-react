import { useState } from "react";
import "./styles.css";

/**
 * Renders the main App component.
 *
 * @return {ReactElement} The rendered component.
 */
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @return {string} The function comment for the given function body.
 */
function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  /**
   * Render the questions.
   *
   * @return {ReactNode} The rendered questions.
   */
  const renderQuestions = () => {
    return questions.map((question) => (
      <Question
        key={question.id}
        question={question}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    ));
  };

  return <div className="flashcards">{renderQuestions()}</div>;
}

/**
 * Renders a question component.
 *
 * @param {object} props - The props object containing the question, selectedId, and setSelectedId.
 * @param {string} props.question - The question to be rendered.
 * @param {string} props.selectedId - The currently selected question id.
 * @param {function} props.setSelectedId - The function to update the selectedId state.
 * @returns {JSX.Element} The rendered question component.
 */
function Question({ question, selectedId, setSelectedId }) {
  const isSelected = selectedId === question.id;

  /**
   * A function that handles the click event.
   *
   * @return {void} No return value.
   */
  const handleClick = () => {
    setSelectedId(isSelected ? null : question.id);
  };

  return (
    <div
      className={`flashcard ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {isSelected ? (
        <p className="answer">{question.answer}</p>
      ) : (
        <p className="question">{question.question}</p>
      )}
    </div>
  );
}
