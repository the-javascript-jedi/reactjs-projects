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
    console.log("this.props", this.props);
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
  render: function () {
    return (
      <div>
        <button>What should i do?</button>
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
  render: function () {
    console.log("Options--this.props", this.props.options.length);
    return (
      <div>
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
  render: function () {
    return <div>AddOption Component Here</div>;
  },
});

ReactDOM.render(<IndecisonApp />, document.getElementById("app"));
