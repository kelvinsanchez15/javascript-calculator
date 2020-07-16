import React, { useState } from "react";
import "./App.css";
import { create, all } from "mathjs/number";
const math = create(all);

const buttons = {
  leftSide: [
    { id: "seven", value: "7" },
    { id: "eight", value: "8" },
    { id: "nine", value: "9" },
    { id: "four", value: "4" },
    { id: "five", value: "5" },
    { id: "six", value: "6" },
    { id: "one", value: "1" },
    { id: "two", value: "2" },
    { id: "three", value: "3" },
    { id: "zero", value: "0" },
    { id: "decimal", value: "." },
    { id: "equals", value: "=" },
  ],
  rightSide: [
    { id: "clear", value: "CA" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "*" },
    { id: "subtract", value: "-" },
    { id: "add", value: "+" },
  ],
};

const isOperator = /[*/+-]/;
const endsWithOperator = /[*/+-]$/;

function App() {
  const [result, setResult] = useState("0");
  const [lastClicked, setLastClicked] = useState("");
  const [decimalFunc, setDecimalFunc] = useState(true);

  const handleClick = (e) => {
    let value = e.target.value;
    setLastClicked(value);
    // Handle decimal
    if (value === ".") {
      if (decimalFunc) {
        setResult(result.concat(value));
        setDecimalFunc(false);
        return;
      }
      return;
    }

    if (isOperator.test(value)) {
      setDecimalFunc(true);
    }
    // Handle "minus" cases
    if (value === "-" && /[*/+]/.test(lastClicked)) {
      setResult(result.concat(value));
      return;
    }

    if (lastClicked === "-" && /[*/+]/.test(value)) {
      setResult(result.slice(0, -2) + value);
      return;
    }
    // Handle operators
    if (isOperator.test(lastClicked) && isOperator.test(value)) {
      setResult(result.slice(0, -1) + value);
      return;
    }
    // Handle clear button
    if (value === "CA") {
      setResult("0");
      setDecimalFunc(true);
      return;
    }
    // Handle equals button
    if (value === "=") {
      if (endsWithOperator.test(result)) {
        setResult(math.evaluate(result.slice(0, -1)).toString());
        return;
      }
      setResult(math.evaluate(result).toString());
      return;
    }
    // Handle initial state case
    if (result === "0") {
      setResult("".concat(value));
      return;
    }

    setResult(result.concat(value));
  };

  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div id="display">{result}</div>
      <div>the last clicked value is: {lastClicked}</div>
      {buttons.leftSide.map(({ id, value }) => (
        <Button key={id} id={id} value={value} handleClick={handleClick} />
      ))}
      {buttons.rightSide.map(({ id, value }) => (
        <Button key={id} id={id} value={value} handleClick={handleClick} />
      ))}
    </div>
  );
}

function Button({ id, value, handleClick }) {
  return (
    <button id={id} value={value} onClick={handleClick}>
      {value}
    </button>
  );
}

export default App;
