import React from "react";

function BillAmount({ billAmount, onSetBillAmount }) {
  return (
    <div>
      <h1 className="my-4">Tip Calculator</h1>
      <div className="form-group">
        <label htmlFor="billAmount">Bill Amount:</label>
        <input
          type="number"
          className="form-control"
          id="billAmount"
          value={billAmount}
          onChange={(e) => onSetBillAmount(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default BillAmount;
