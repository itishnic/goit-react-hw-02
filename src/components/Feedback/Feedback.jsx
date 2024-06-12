const Feedback = ({ value }) => {
  if (value.good + value.neutral + value.bad)
    return (
      <div>
        <p>Good: {value.good}</p>
        <p>Neutral: {value.neutral}</p>
        <p>Bad: {value.bad}</p>
        <p>Total: {value.good + value.neutral + value.bad}</p>
        <p>
          Positive: 
           {(value.good * 100) / (value.good + value.bad)
            ? Math.ceil((value.good * 100) / (value.good + value.bad))
            : ""}
           %
        </p>
      </div>
    );
  else return <p>No feedback yet</p>;
};

export default Feedback;
