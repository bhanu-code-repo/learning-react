import React from "react";

function TipPercentage({ tipPercentage, onTipPercentage }) {
  return (
    <div className="form-group">
      <label htmlFor="tipPercentage">Custom Tip Percentage:</label>
      <input
        type="number"
        className="form-control"
        id="tipPercentage"
        value={tipPercentage}
        onChange={(e) => onTipPercentage(e.target.value)}
      />
    </div>
  );
}

export default TipPercentage;
