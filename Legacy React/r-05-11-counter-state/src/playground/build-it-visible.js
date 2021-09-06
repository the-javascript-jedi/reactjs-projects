// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
// // using ES6
// class Visibility extends React.Component {
//   constructor(props) {
//     super(props);
//     // bind the function
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//     this.state = {
//       visibility: false,
//     };
//   }
//   // function
//   handleToggleVisibility() {
//     console.log("toggleVisibility clicked");
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility,
//       };
//     });
//   }
//   // render method
//   render() {
//     return (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.handleToggleVisibility}>
//           {this.state.visibility ? "Hide details" : "Show details"}
//         </button>
//         {this.state.visibility && (
//           <div>
//             <p>Hey. These are some details you can now see!</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Visibility />, document.getElementById("app"));
//////////////////////////////////////////////////////////////////////////////
// // using ES5
var ToggleVisibility = React.createClass({
  getInitialState: function () {
    return {
      visibility: false,
    };
  },
  // function
  handleToggleVisibility: function () {
    console.log("handleToggleVisibility clicked");
    this.setState(function (prevState) {
      return {
        visibility: !prevState.visibility,
      };
    });
  },
  render: function () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  },
});
ReactDOM.render(<ToggleVisibility />, document.getElementById("app"));
