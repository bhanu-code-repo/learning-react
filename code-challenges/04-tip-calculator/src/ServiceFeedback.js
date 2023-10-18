import React from "react";

function ServiceFeedback({ serviceFeedback, onServiceFeedback, children }) {
  return (
    <div className="form-group">
      <label htmlFor="serviceFeedback">{children}</label>
      <select
        className="form-control"
        id="serviceFeedback"
        value={serviceFeedback}
        onChange={(e) => onServiceFeedback(Number(e.target.value))}
      >
        <option value="0">Not Satisfied (0%)</option>
        <option value="10">Satisfied (10%)</option>
        <option value="20">Very Satisfied (20%)</option>
      </select>
    </div>
  );
}

export default ServiceFeedback;
