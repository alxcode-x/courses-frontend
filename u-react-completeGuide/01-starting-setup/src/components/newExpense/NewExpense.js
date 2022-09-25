import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';
import Card from '../common/Card';

const NextExpense = (props) => {
    const [openedForm, setOpenedForm] = useState(false);

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("In NewExpense.js");
        console.log(expenseData)
        props.onAddExpense(expenseData); // executing function from props and returning data
        setOpenedForm(false);
    };

    const openFormHandler = () => {
        setOpenedForm(true)
    }

    return (
        <Card className="new-expense">
            {openedForm
                ? <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={setOpenedForm}/>
                : <button onClick={openFormHandler}>Add New Expense</button>}
        </Card>
    );
}

export default NextExpense;