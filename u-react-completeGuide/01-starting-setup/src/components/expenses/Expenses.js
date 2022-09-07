import './Expenses.css';
import Card from '../common/Card';
import ExpenseItem from "./items/ExpenseItem";
import ExpensesFilter from './filter/ExpensesFilter';

function items(props) {
    const filterHandler = (selectedYear) => console.log(selectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectFilter={filterHandler}/>
            {props.items.map((expense) => {
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            })}
        </Card>
    );
}

export default items;