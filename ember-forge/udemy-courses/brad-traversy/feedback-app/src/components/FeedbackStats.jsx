import React from "react";

const FeedbackStats = ({ feedBackData }) => {
  console.log("feedBackData", feedBackData);
  let average =
    feedBackData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBackData.length;

  return (
    <div>
      <p>FeedbackStats</p>
      <div>
        <span>Reviews: {feedBackData.length} </span>
        <span>Average Review: {isNaN(average) ? 0 : average}</span>
      </div>
    </div>
  );
};

export default FeedbackStats;
