import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../date/ExpenseDate';
import Card from '../../common/Card';

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 2, 14);
    // const expenseTitle = 'Car Insuracce';
    // const expenseAmount = 268.98;

    const [title, setTitle] = useState(props.title);

    //let title = props.title;

    const clickHandler = () => {
        setTitle('Updated'); //instead of title = 'Updated!'
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{`$${props.amount}`}</div>
            </div>
            <button type="button" onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;