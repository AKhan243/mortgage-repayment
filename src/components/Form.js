// noinspection JSCheckFunctionSignatures

import React, {useState} from "react";
import {FaPoundSign} from "react-icons/fa";
import "../styles/Form.css";
import FormInputGroup from "./FormInputGroup";

function Form() {

  const [propertyValue, setPropertyValue] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount() {
    setLoanAmount(propertyValue - deposit);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    // Percentage conversion
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    // years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }

    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
      (1 -
        Math.pow(
          1 + percentageToDecimal(interestRate),
          -yearsToMonths(mortgageTerm)
        ))
    );

    return monthlyPayment;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormInputGroup
        text="Property Value "
        icon={<FaPoundSign/>}
        placeholder={"e.g. 120000"}
        value={propertyValue}
        onInput={(e) => setPropertyValue(e.target.value)}
        onkeyup={calculateLoanAmount}
      />
      <FormInputGroup
        text="Deposit"
        icon={<FaPoundSign/>}
        placeholder={"e.g. 20000"}
        value={deposit}
        onInput={(e) => setDeposit(e.target.value)}
        onkeyup={calculateLoanAmount}
      />
      <FormInputGroup
        text="Loan Amount"
        icon={<FaPoundSign/>}
        placeholder={"Amount loaned"}
        readOnly={true}
        value={loanAmount}
      />
      <FormInputGroup
        text="Interest Rate %"
        placeholder={"Enter your interest rate"}
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
      />
      <FormInputGroup
        text="Mortgage Term (years)"
        placeholder={"Enter the duration of your Mortgage Term in years"}
        value={mortgageTerm}
        onInput={(e) => setMortgageTerm(e.target.value)}
      />
      <h4>
        Monthly payment: <FaPoundSign/>
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

      <button
        type="submit"
        onClick={calculateMonthlyPayment}
      >
        Calculate
      </button>
    </form>
  );
}

export default Form;
