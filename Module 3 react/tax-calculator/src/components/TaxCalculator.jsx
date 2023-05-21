import React from "react";
import { useState } from "react";
import "./TaxCalculator.css";
import TaxRateSelector from "./TaxRateSelector";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState(0);

  return (
    <form>
      <label>
        <h1>Tax Calculator</h1>
      </label>
      <h2>Tax Result:{result.toFixed(2)}</h2>
      <label>income</label>
      <input
        type="number"
        name="tax"
        id="tax"
        onChange={(e) => setIncome(e.target.value)}
      />
      <TaxRateSelector />
      <p> exported tax </p>
      <button
        className="btn"
        onClick={(event) => {
          setResult(income * 0.2);
          event.preventDefault();
        }}
      >
        Calculate My Income Tax
      </button>
    </form>
  );
}

export default TaxCalculator;
