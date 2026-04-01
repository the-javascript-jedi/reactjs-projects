import FeedbackItem from "./FeedbackItem";

const FeedbackList = (props) => {
  return (
    <div>
      {!props.feedback ||
        (props.feedBackData.length == 0 && <p>No data found</p>)}
      {/* FeedbackItem */}
      {props.feedBackData.map((feedBackData, index) => (
        <FeedbackItem itemData={feedBackData} key={index}></FeedbackItem>
      ))}
    </div>
  );
};

export default FeedbackList;
