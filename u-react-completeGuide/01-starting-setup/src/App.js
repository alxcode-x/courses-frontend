import React, {useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: 'Car Insurance', amount: 287.98, date: new Date(2022, 11, 22) },
  { id: 2, title: 'Life Insurance', amount: 290.00, date: new Date(2019, 11, 23) },
  { id: 3, title: 'Medical Insurance', amount: 180.14, date: new Date(2022, 11, 23) },
  { id: 4, title: 'Car Maintenance', amount: 90.12, date: new Date(2019, 12, 21) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => { // this is the correct way to update a state that depends on the previous one.
      return [...prevExpenses, expense]
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/> {/* Passing a function */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App; 