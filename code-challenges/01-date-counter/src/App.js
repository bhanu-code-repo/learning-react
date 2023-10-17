import DateCounter1 from "./DateCounter1";
import DateCounter2 from "./DateCounter2";

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The JSX element representing the App component.
 */
function App() {
  return (
    <div className="App">
      <DateCounter1 />
      <DateCounter2 />
    </div>
  );
}

export default App;
