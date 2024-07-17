// src/components/PieChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart({ expenses, incomes }) {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

        chartInstance = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Expenses', 'Income'],
            datasets: [{
              data: [totalExpenses, totalIncome],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            }]
          }
        });
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [expenses, incomes]);

  return (
    <div>
      <h2>Pie Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default PieChart;
