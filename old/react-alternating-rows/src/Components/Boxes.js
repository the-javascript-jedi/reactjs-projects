import React from "react";

const Boxes = ({ boxesData }) => {
  console.log("boxesData", boxesData);
  var renderBoxes = () => {
    let results = boxesData;
    let finalArr = [],
      columns = [];
    results.map((result, i) => {
      // prepare the array of columns (cols)
      columns.push(
        <div key={i} className="col-md-4 columns">
          <p>Card {result}</p>
        </div>
      );
      // after three items add a new row
      if ((i + 1) % 3 === 0) {
        // normal row
        if (i % 2 == 0) {
          finalArr.push(<div className="row mt-4 one">{columns}</div>);
          columns = [];
        }
        //reverse row
        else {
          finalArr.push(
            <div className="row flex-row-reverse mt-4 two">{columns}</div>
          );
          columns = [];
        }
      }
    });
    if (columns.length !== 0) {
      finalArr.push(
        <div key="last-row" className="row mt-4 last-row">
          {columns}
        </div>
      );
      columns = [];
    }
    return finalArr;
  };
  return (
    <div className="App">
      <div className="container">{renderBoxes()}</div>
    </div>
  );
};

export default Boxes;
