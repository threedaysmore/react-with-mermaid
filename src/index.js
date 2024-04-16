import React from "react";
import ReactDOM from "react-dom";
import Mermaid from "./Mermaid";
import example from "./example";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Mermaid Example</h1>
      <Mermaid chart={example} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
