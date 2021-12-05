import React from "react";

const BoxesMobile = ({ boxesData }) => {
  //renderBoxes
  var renderBoxes = () => {
    let results = boxesData;
    let finalArr = [],
      columns = [];
    results.forEach((result, i) => {
      const calculateClassName = () => {
        if (i === 0) {
          //
          return "col-md-4 col-sm-8 col-xs-12 columns startingBox";
        } else if ((i + 1) % 3 === 0) {
          return "col-md-4 col-sm-8 col-xs-12 columns lastBox";
        } else if ((i + 3) % 3 === 0) {
          return "col-md-4 col-sm-8 col-xs-12 columns firstBox";
        } else {
          return "col-md-4 col-sm-8 col-xs-12 columns middleBox";
        }
      };
      // prepare the array of columns (cols)
      columns.push(
        <div key={i} className={calculateClassName(i)}>
          <div className="cardContainer" id={`div${i}`}>
            <p>Card {result}</p>
          </div>
          <div className="horizontal-connector"></div>
          <div class="vl"></div>
        </div>
      );
      // after three items add a new row
      if ((i + 1) % 3 === 0) {
        // normal row
        if (i % 2 == 0) {
          finalArr.push(
            <div className="row normalLeftToRight one mt-5">{columns}</div>
          );
          columns = [];
        }
        //reverse row
        else {
          finalArr.push(
            <div className="row rightToLeft flex-row-reverse two mt-5">
              {columns}
            </div>
          );
          columns = [];
        }
      }
    });
    if (columns.length !== 0) {
      console.log("columns", columns);
      finalArr.push(
        <div key="last-row" className="row last-row mt-5">
          {columns}
        </div>
      );
      columns = [];
    }
    return finalArr;
  };
  const pointOne = document.getElementById("div1");
  const pointTwo = document.getElementById("div2");

  return (
    <div>
      BoxesMobile
      <br />
      <div id="container" className="container">
        {renderBoxes()}
      </div>
    </div>
  );
};

export default BoxesMobile;
