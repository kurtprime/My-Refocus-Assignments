import React from "react";
import { useState } from "react";
import "./TaxCalculator.css";
import TaxRateSelector from "./TaxRateSelector";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState(0);
  const [tax, setTax] = useState(0.2);
  const [error, setError] = useState("");

  const callBack = (target) => {
    setTax(target);
  };

  return (
    <form>
      <label>
        <h1>Tax Calculator</h1>
      </label>
      <h2>Tax Result:{result.toFixed(2)}</h2>
      <label>income</label>
      <input
        type="text"
        name="tax"
        id="tax"
        onChange={(e) => setIncome(e.target.value)}
      />
      <TaxRateSelector callBack={callBack} />
      <button
        className="btn"
        onClick={(event) => {
          setError("");
          if (!Number(income)) setError("Number only");

          console.log(income.length);
          if (income.length >= 7) {
            setError("Maximum of 7 digits only");
            event.preventDefault();
            return;
          }

          event.preventDefault();
          setResult(income * tax);
        }}
      >
        Calculate My Income Tax
      </button>
      <p>{error}</p>
    </form>
  );
}

export default TaxCalculator;
