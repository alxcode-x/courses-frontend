import React from "react";
import ExpenseItem from "../items/ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No exenses found</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id} // *1
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
            ))}
        </ul>
    )
}

export default ExpensesList;

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