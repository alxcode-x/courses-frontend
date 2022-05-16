import React, { useState } from 'react';
import './ExpensesFilter.css';
import '../../common/Card';

function ExpensesFilter(props){
    const [selectedFilter, setSelectedFilter] = useState('2020');

    const filterHandler = (event) => {
        setSelectedFilter(event.target.value);
        props.onSelectFilter(selectedFilter);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selectedFilter} onChange={filterHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;