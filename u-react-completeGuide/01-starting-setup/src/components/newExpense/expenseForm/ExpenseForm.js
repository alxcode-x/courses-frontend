import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEneteredTitle]   =  useState('');
    const [enteredAmount, setEneteredAmount] =  useState('');
    const [enteredDate, setEneteredDate]     =  useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => { return { ...prevState, enteredTitle: event.target.value}})
        console.log(enteredTitle)
    };


    const AmountChangeHandler = (event) => {
        setEneteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        console.log(enteredAmount)
    };


    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        console.log(enteredDate)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData();
        alert('Expende Added!!!');
        setEneteredTitle('');
        setEneteredAmount('');
        setEneteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        min="1.00"
                        max="99.99"
                        value={enteredAmount}
                        onChange={AmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;