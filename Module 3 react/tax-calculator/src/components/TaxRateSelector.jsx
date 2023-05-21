import React, { useState } from "react";

function TaxRateSelector({ callBack }) {
  const [taxRate, setTaxRate] = useState(0.1);
  const handleTax = (e) => {
    setTaxRate(e.target.value);
  };

  return (
    <>
      <label>tax rate {taxRate}</label>
      <select name="tax" id="tax" onChange={handleTax}>
        <option value="0.1">10%</option>
        <option value="0.15">15%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
      </select>
    </>
  );
}

export default TaxRateSelector;
