// ES6
// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </div>
//   );
// };

//ES5
var React = require("react");
var Option = function (props) {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};
export default Option;
