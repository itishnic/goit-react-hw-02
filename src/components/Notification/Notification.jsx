

const Notification = ({ totalFeedback }) => {
    return (
      <div>
        {totalFeedback ? "" : <p>No feedback yet</p>}
        {console.log(totalFeedback)}
      </div>
    );
}

export default Notification
