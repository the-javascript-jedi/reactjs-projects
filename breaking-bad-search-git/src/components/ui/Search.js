import React, { useState } from "react";
const onSubmit = () => {
  return console.log("submitted");
};
const Search = (props) => {
  const [text, setText] = useState("");
  const onChangeEvent=(queryValue)=>{
    console.log("[SearchJS] - queryValue",queryValue);
    setText(queryValue);
    props.getSearchQuery(queryValue);
  }
  return (
    <section className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={(e)=>onChangeEvent(e.target.value)}
          value={text}
          placeholder="search characters"
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;