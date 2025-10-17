// IndecisonApp -- Root component
var IndecisonApp = React.createClass({
  render: function () {
    const title = "Indecison";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  },
});

// Header Component
var Header = React.createClass({
  render: function () {
    // console.log("Header -- this.props", this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  },
});
//Action Component
var Action = React.createClass({
  handlePick: function () {
    alert("handlePick");
  },
  render: function () {
    // console.log("Action--render--this", this);
    return (
      <div>
        <button onClick={this.handlePick}>What should i do?</button>
      </div>
    );
  },
});
// Option Component
var Option = React.createClass({
  render: function () {
    return <div>{this.props.option}</div>;
  },
});
// Options Component
var Options = React.createClass({
  removeAllHandler: function () {
    console.log("Options--this.props--removeAllHandler", this.props.options);
    alert("removeAllHandler clciked");
  },
  render: function () {
    console.log("Options--this.props--render", this.props.options);
    return (
      <div>
        <button onClick={this.removeAllHandler}>Remove All</button>
        {/* Options component here */}
        {this.props.options.map(function (option, index) {
          return <Option option={option} key={index} />;
        })}
      </div>
    );
  },
});

// Add Option Component
var AddOption = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    // grab the form option name
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  },
});

ReactDOM.render(<IndecisonApp />, document.getElementById("app"));
