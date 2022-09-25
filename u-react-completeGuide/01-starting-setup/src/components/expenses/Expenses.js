import React, { useState } from 'react';
import './Expenses.css';
import Card from '../common/Card';
import ExpensesFilter from './filter/ExpensesFilter';
import ExpensesList from "./expensesList/ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => { return setFilteredYear(selectedYear) };

    const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === filteredYear });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onSelectFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;

