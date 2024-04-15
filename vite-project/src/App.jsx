import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  changeColor = (rengg) => {
    setTimeout(() => {
      this.setState({color: rengg})
    }, 2000)
  }

  shouldComponentUpdate = () => {
    return true;
  }
  componentDidUpdate() {
    document.getElementById("mypara").innerHTML =
    "The updated car is " + this.state.color;
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {" "}
          {this.state.model} {" "}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={() => this.changeColor("blue")} // Pass a function reference
        >
          Change color
        </button>
        <p id="mypara">
        </p>
      </div>
    );
  }
}

export default Car;
