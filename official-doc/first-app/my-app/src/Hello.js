import React from "react";
import ReactDOM from "react-dom/client";

export default function Hello(props) {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));