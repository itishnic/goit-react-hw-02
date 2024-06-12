const CounterComponent = ({ handleIncrement, value }) => {
  return (
    <>
      <button onClick={handleIncrement}>{value}</button>
    </>
  );
};

export default CounterComponent;
