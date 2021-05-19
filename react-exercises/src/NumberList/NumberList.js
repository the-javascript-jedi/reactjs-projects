import React, { useState } from "react";
import Numbers from "./Numbers";
const NumberList = () => {
  const [numbers, setnumber] = useState({ nums: [1, 2, 3, 4, 5] });
  const deleteGoal = (num) => {
    console.log("clicked num", num);
    const deletedGoal = numbers.nums.filter((number) => {
      return number !== num;
    });
    console.log("deletedGoal", deletedGoal);
    setnumber({ nums: [...deletedGoal] });
  };
  return (
    <div>
      {numbers.nums.map((n) => {
        return <Numbers nums={n} deleteGoal={deleteGoal} />;
      })}
    </div>
  );
};

export default NumberList;
