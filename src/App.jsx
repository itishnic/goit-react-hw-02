import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from './components/Notification/Notification'
import Options from "./components/Options/Options";
import "./App.css";


const App = () => {


  const handleReset = () => {
    setButtonsCount(buttonsState);
  };

  const buttonsState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
 

  const [buttonsCount, setButtonsCount] = useState(() => {
    const savedCounts = localStorage.getItem("buttonsCount");
    return savedCounts
      ? JSON.parse(savedCounts)
      : { good: 0, neutral: 0, bad: 0 };
  });



const handleButtonClick = (buttonKey) => {
 
  setButtonsCount((prevCounts) => ({
    ...prevCounts,
    [buttonKey]: prevCounts[buttonKey] + 1,
  }));
};
  
  useEffect(() => {
    localStorage.setItem("buttonsCount", JSON.stringify(buttonsCount));
  }, [buttonsCount]);

  
  const totalFeedback = buttonsCount.good + buttonsCount.neutral + buttonsCount.bad


  const positiveFeedback = Math.round(
    (buttonsCount.good / totalFeedback) * 100
  );

  
  
  
  
  return (
    <>
      <Description />
      <Options
        handleButtonClick={handleButtonClick}
        buttonsCount={buttonsCount}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      <Feedback
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
        buttonsCount={buttonsCount}
      />
      <Notification totalFeedback={totalFeedback} />
    </>
  );
}

export default App
