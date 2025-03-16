import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { Greet, HelloWorld } from "../wailsjs/go/main/App";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  function hello() {
    HelloWorld("Jucelino").catch(console.error);
  }

  return (
    <div id="App">
      <img src={logo} id="logo" alt="logo" />
      <div id="result" onClick={hello} className="result">
        {resultText}
      </div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <button className="btn" onClick={greet}>
          Greet
        </button>
      </div>
    </div>
  );
}

export default App;
