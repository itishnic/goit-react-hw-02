const Options = ({ handleButtonClick, handleReset, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => handleButtonClick("good")}>Good</button>
      <button onClick={() => handleButtonClick("neutral")}>Neutral</button>
      <button onClick={() => handleButtonClick("bad")}>Bad</button>

      {totalFeedback ? <button onClick={handleReset}>Reset</button> : ""}
    </div>
  );
};

export default Options;
