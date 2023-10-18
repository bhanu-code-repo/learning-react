import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BillAmount from "./BillAmount";
import ServiceFeedback from "./ServiceFeedback";
import ResetButton from "./ResetButton";
import TipPercentage from "./TipPercentage";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [userPercentage, setUserPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const calculateTip = () => {
    if (tipPercentage > 0 && billAmount > 0) {
      return billAmount * (tipPercentage / 100);
    }

    return (billAmount * (userPercentage + friendPercentage)) / 200;
  };

  function handleReset() {
    setBillAmount(0);
    setUserPercentage(0);
    setFriendPercentage(0);
    setTipPercentage(0);
  }

  return (
    <div className="container">
      <BillAmount billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <ServiceFeedback
        serviceFeedback={userPercentage}
        onServiceFeedback={setUserPercentage}
      >
        How did you like the service?
      </ServiceFeedback>
      <ServiceFeedback
        serviceFeedback={friendPercentage}
        onServiceFeedback={setFriendPercentage}
      >
        How did your friend like the service?
      </ServiceFeedback>
      <TipPercentage
        tipPercentage={tipPercentage}
        onTipPercentage={setTipPercentage}
      />
      {billAmount > 0 && (
        <>
          <h4>Total Tip: ${calculateTip().toFixed(2)}</h4>
          <ResetButton onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

export default TipCalculator;
