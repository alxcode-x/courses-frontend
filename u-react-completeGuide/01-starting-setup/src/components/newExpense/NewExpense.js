import React from 'react';
import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';
import Card from '../common/Card';

const NextExpense = (props) => {
    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("In NewExpense.js");
        console.log(expenseData)
        props.onAddExpense();
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler} />
        </Card>
    );
}

export default NextExpense;