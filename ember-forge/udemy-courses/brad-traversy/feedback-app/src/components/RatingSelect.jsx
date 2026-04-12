import { useState } from "react";

const RatingSelect = ({ selectRating }) => {
  const [selected, setSelected] = useState(0);
  const handleChange = (event) => {
    console.log("ratingselect handleChange called");
    setSelected(+event.currentTarget.value);
    selectRating(+event.currentTarget.value);
  };
  return (
    <div>
      <p>RatingSelect</p>
      <div>
        <ul className="rating">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              <input
                type="radio"
                name="rating"
                id={`num${num}`}
                value={num}
                onChange={handleChange}
                checked={selected === num}
              />
              <label htmlFor={`num${num}`}>{num}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RatingSelect;
