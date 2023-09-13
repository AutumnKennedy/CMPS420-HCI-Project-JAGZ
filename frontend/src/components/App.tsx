import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return <h1>Testing React Code</h1>;
  }
}

const appDiv = document.getElementById("app");

if (appDiv) {
  ReactDOM.render(<App />, appDiv);
}