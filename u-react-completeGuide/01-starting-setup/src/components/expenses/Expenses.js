import React, { useState } from 'react';
import './Expenses.css';
import Card from '../common/Card';
import ExpenseItem from "./items/ExpenseItem";
import ExpensesFilter from './filter/ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => { return setFilteredYear(selectedYear) };

    const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === filteredYear });

    let expesesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expesesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} // *1
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))
    }


    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onSelectFilter={filterChangeHandler} />
            {expesesContent}
        </Card>
    );
}

export default Expenses;

// ==== Notes ====
// *1: It helps to react knows every single list item in order to prevent react reloads all items every time a new one is added and fix the warning.

// Render Option 2
/*    {filteredExpenses.length === 0 ? 
        <p>No expenses found.</p> :
        filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} // *1
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))} */

// Render Option 3
// { filteredExpenses.length === 0 && <p>No expenses found.</p> }
//             {filteredExpenses.length === 0 && 
//                 filteredExpenses.map((expense) => (
//                 <ExpenseItem
//                     key={expense.id} // *1
//                     title={expense.title}
//                     amount={expense.amount}
//                     date={expense.date} />
//             ))}