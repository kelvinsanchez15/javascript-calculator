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
    { id: "clear", value: "C" },
    { id: "divide", value: "÷" },
    { id: "multiply", value: "×" },
    { id: "subtract", value: "−" },
    { id: "add", value: "+" },
  ],
};

const isOperator = /[×÷+−]/;
const endsWithOperator = /[*/+-]$/;
const charsEquivalence = { "÷": "/", "×": "*", "−": "-" };

function App() {
  const [formula, setFormula] = useState("0");
  const [lastClicked, setLastClicked] = useState("");
  const [decimalFunc, setDecimalFunc] = useState(true);

  const handleClick = (e) => {
    let value = e.target.innerHTML;
    setLastClicked(value);
    // Handle decimal
    if (value === ".") {
      if (decimalFunc) {
        setFormula(formula.concat(value));
        setDecimalFunc(false);
        return;
      }
      return;
    }

    if (isOperator.test(value)) {
      setDecimalFunc(true);
    }
    // Handle "minus" cases
    if (value === "−" && /[×÷+]/.test(lastClicked)) {
      setFormula(formula.concat(value));
      return;
    }

    if (lastClicked === "−" && /[×÷+]/.test(value)) {
      setFormula(formula.slice(0, -2) + value);
      return;
    }
    // Handle operators
    if (isOperator.test(lastClicked) && isOperator.test(value)) {
      setFormula(formula.slice(0, -1) + value);
      return;
    }
    // Handle clear button
    if (value === "C") {
      setFormula("0");
      setDecimalFunc(true);
      return;
    }
    // Handle equals button
    if (value === "=") {
      let cleanFormula = formula.replace(/[÷−×]/g, (e) => charsEquivalence[e]);
      if (endsWithOperator.test(cleanFormula)) {
        setFormula(math.evaluate(cleanFormula.slice(0, -1)).toString());
        return;
      }
      setFormula(math.evaluate(cleanFormula).toString());
      return;
    }
    // Handle initial state case
    if (formula === "0") {
      setFormula("".concat(value));
      return;
    }

    setFormula(formula.concat(value));
  };

  return (
    <div className="App">
      <div id="calculator-wrapper">
        <div id="display">{formula}</div>
        <div id="numpad">
          <div id="grid-wrapper">
            {buttons.leftSide.map(({ id, value }) => (
              <Button
                key={id}
                id={id}
                value={value}
                handleClick={handleClick}
              />
            ))}
          </div>
          <div id="operators-wrapper">
            {buttons.rightSide.map(({ id, value }) => (
              <Button
                key={id}
                id={id}
                value={value}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ id, value, handleClick }) {
  return (
    <div className="button" id={id} value={value} onClick={handleClick}>
      {value}
    </div>
  );
}

export default App;
