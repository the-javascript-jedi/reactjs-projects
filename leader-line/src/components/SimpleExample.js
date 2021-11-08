import React, { useRef } from "react";
import Xarrow from "react-xarrows";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};
const boxes = [1, 2, 3, 4, 5];
function SimpleExample() {
  const fnBox = () => {
    return boxes.map((box, index) => {
      console.log("start--elem" + index);
      var endElemIndex = +index + 1;
      console.log("end--elem", "elem" + endElemIndex);
      return (
        <>
          <div id={"elem" + index} style={boxStyle}>
            {index}
          </div>
          <Xarrow
            start={"elem" + index}
            //can be react ref
            end={"elem" + endElemIndex} //or an id
          />
        </>
      );
    });
  };
  return (
    <>
      {/* Box 1 to Box 4*/}
      {/* first row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {/* <div id="elem1" style={boxStyle}>
          Box 1
        </div>
        <div id="elem2" style={boxStyle}>
          Box 2
        </div>
        <div id="elem3" style={boxStyle}>
          Box 3
        </div>
        <div id="elem4" style={boxStyle}>
          Box 4
        </div> */}
        {/* <Xarrow
          start="elem1" //can be react ref
          end="elem2" //or an id
        />
        <Xarrow
          start={"elem2"} //can be react ref
          end="elem3" //or an id
        />
        <Xarrow
          start={"elem3"} //can be react ref
          end="elem4" //or an id
        /> */}
        {fnBox()}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexDirection: "row-reverse",
          marginTop: "50px",
        }}
      >
        {/* Box 5 */}
        <div id="elem5" style={boxStyle}>
          Box 5
        </div>
        {/* Box 6 */}
        <p id="elem6" style={boxStyle}>
          Box 6
        </p>
        {/* Box 7 */}
        <div style={boxStyle} id="elem7">
          Box 7
        </div>
        {/* Box 4 */}
        <p id="elem8" style={boxStyle}>
          Box 8
        </p>
        <Xarrow
          start="elem4" //can be react ref
          end="elem5" //or an id
        />
        <Xarrow
          start={"elem5"} //can be react ref
          end="elem6" //or an id
        />
        <Xarrow
          start={"elem6"} //can be react ref
          end="elem7" //or an id
        />
        <Xarrow
          start={"elem7"} //can be react ref
          end="elem8" //or an id
        />
      </div>
    </>
  );
}

export default SimpleExample;
