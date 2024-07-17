
import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList.jsx';
import AddExpenseForm from './components/AddExpenseForm.jsx';
import TotalExpenses from './components/TotalExpenses.jsx';
import TotalIncome from './components/TotalIncome.jsx';
import AddIncomeButton from './components/AddIncomeButton.jsx';
import PieChart from './components/PieChart.jsx';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);


  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };


  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };


  const addIncome = (newIncome) => {
    setIncomes([...incomes, newIncome]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <TotalExpenses expenses={expenses} />
      <AddIncomeButton addIncome={addIncome} />
      <TotalIncome incomes={incomes} />
      <PieChart expenses={expenses} incomes={incomes} />
    </div>
  );
}

export default App;
