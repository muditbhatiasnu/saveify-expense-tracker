
import React, { useState } from 'react';

function AddExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense({ id: Date.now(), name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpenseForm ;
