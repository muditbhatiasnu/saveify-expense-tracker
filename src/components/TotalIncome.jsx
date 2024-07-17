
import React, { useState } from 'react';

function TotalIncome({ incomes }) {
  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

  return (
    <div>
      <h2>Total Income</h2>
      <p>Total: ${totalIncome.toFixed(2)}</p>
    </div>
  );
}

export default TotalIncome;
