import { useSelector } from "react-redux";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const feedBackData = useSelector((state) => state.feedback.feedback);

  console.log("feedBackData", feedBackData);
  return (
    <div>
      {feedBackData && feedBackData.length > 0 ? (
        feedBackData.map((feedBackData, index) => (
          <FeedbackItem
            itemData={feedBackData}
            key={feedBackData.id}
          ></FeedbackItem>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default FeedbackList;
