var Counter = React.createClass({
  // initial state
  getInitialState: function () {
    return {
      count: 0,
    };
  },
  handleAdd: function () {
    console.log("handleAdd");
    this.setState(function (prevState) {
      return {
        count: prevState.count + 1,
      };
    });
  },
  handleMinus: function () {
    console.log("handleMinus");
    this.setState(function (prevState) {
      return {
        count: prevState.count - 1,
      };
    });
  },
  handleReset: function () {
    console.log("handleReset");
    this.setState(function () {
      return {
        count: 0,
      };
    });
  },
  render: function () {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  },
});
ReactDOM.render(<Counter />, document.getElementById("app"));
////////////////////////////////////////////////////////////////////
// // using ES6 -Class Based Components
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0,
//     };
//   }
//   handleAddOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }
//   handleMinusOne() {
//     // using prevState
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1,
//       };
//     });
//   }
//   handleReset() {
//     this.setState(() => {
//       return {
//         count: 0,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById("app"));
/////////////////////////////////////////////////////////////////////////////
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
// babel src/es6/counter-example.js --out-file=public/scripts/app.js --presets="env,react" --wat
// babel src/es6/counter-example.js --out-file=public/scripts/app.js --presets="env,react" --watch
