import React from "react";

function ResetButton({ onReset }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
