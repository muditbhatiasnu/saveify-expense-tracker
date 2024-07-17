
import React from 'react';

function TotalExpenses({ expenses }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>Total: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
}

export default TotalExpenses;
