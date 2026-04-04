import FeedbackItem from "./FeedbackItem";

const FeedbackList = (props) => {
  console.log("props.feedBackData", props.feedBackData);
  return (
    <div>
      {props.feedBackData && props.feedBackData.length > 0 ? (
        props.feedBackData.map((feedBackData, index) => (
          <FeedbackItem
            itemData={feedBackData}
            key={feedBackData.id}
            handleDelete={(id) => {
              props.appHandleDeleteFeedback(id);
            }}
          ></FeedbackItem>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default FeedbackList;
