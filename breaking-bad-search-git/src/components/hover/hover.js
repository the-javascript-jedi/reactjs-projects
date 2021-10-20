import React, { useState } from "react";

const [style, setStyle] = useState(5);
const hover = () => {
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid gray",
          width: 300,
          height: 300,
          padding: 10,
          margin: 100,
        }}
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <button style={style}>Click</button>
      </div>
    </div>
  );
};

export default hover;
//import React, { useState } from "react";

// export default function hover() {
//   const [style, setStyle] = useState({ display: "none" });

//   return (
//     <div className="App">
//       <div
//         style={{
//           border: "1px solid gray",
//           width: 300,
//           height: 300,
//           padding: 10,
//           margin: 100,
//         }}
//         onMouseEnter={(e) => {
//           setStyle({ display: "block" });
//         }}
//         onMouseLeave={(e) => {
//           setStyle({ display: "none" });
//         }}
//       >
//         <button style={style}>Click</button>
//       </div>
//     </div>
//   );
// }
