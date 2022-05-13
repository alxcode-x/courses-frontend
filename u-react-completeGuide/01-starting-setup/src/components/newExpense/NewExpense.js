import React from 'react';
import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';
import Card from '../common/Card';

const NextExpense = () =>{
    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseDate={expenseDataHandler}/>
        </Card>
    );
}

export default NextExpense;