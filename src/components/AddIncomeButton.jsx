// src/components/AddIncomeButton.jsx
import React from 'react';

function AddIncomeButton({ addIncome }) {
  const handleAddIncome = () => {
    const amount = parseFloat(prompt("Enter income amount:"));
    if (!isNaN(amount)) {
      addIncome({ id: Date.now(), amount });
    }
  };

  return (
    <div>
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
}

export default AddIncomeButton;
