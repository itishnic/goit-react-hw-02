import { useState, useEffect } from "react";
import CounterComponent from "./components/CounterComponent/СounterComponent";
import Descriptions from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";

import "./App.css";
function App() {
  const [state, setState] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-clicks");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify({ ...state }));
  }, [state]);

  const handleIncrementA = () => {
    setState({ ...state, good: state.good + 1 });
  };

  const handleIncrementB = () => {
    setState({ ...state, neutral: state.neutral + 1 });
  };

  const handleIncrementC = () => {
    setState({ ...state, bad: state.bad + 1 });
  };

  const handleIncrementD = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  return (
    <>
      <Descriptions />
      {/* <div>
        {buttons.map((el, i) => (
          <button onClick={() => setState(state + 1)} key={el}>
            {buttons[i]}
          </button>
        ))} */}

      <CounterComponent value={"Good"} handleIncrement={handleIncrementA} />
      <CounterComponent value={"Neutral"} handleIncrement={handleIncrementB} />
      <CounterComponent value={"Bad"} handleIncrement={handleIncrementC} />

      {totalFeedback ? (
        <CounterComponent value={"Reset"} handleIncrement={handleIncrementD} />
      ) : (
        ""
      )}

      <Feedback value={state} />
    </>
  );
}

export default App;
