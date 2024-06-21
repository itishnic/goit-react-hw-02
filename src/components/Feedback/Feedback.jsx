import React from "react";


  



const Feedback = ({ buttonsCount, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      
          <p>Good: {buttonsCount.good} </p>
          <p>Neutral: {buttonsCount.neutral} </p>
          <p>Bad: {buttonsCount.bad} </p>
          <p>Total: {totalFeedback} </p>
          <p>Positive: {positiveFeedback}%</p>
      
    </div>
  );
};

export default Feedback

