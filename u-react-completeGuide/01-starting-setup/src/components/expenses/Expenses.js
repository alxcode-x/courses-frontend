import './Expenses.css';
import Card from '../common/Card';
import ExpenseItem from "./items/ExpenseItem";
import ExpensesFilter from './filter/ExpensesFilter';

function items(props) {
    const filterHandler = (selectedYear) => console.log(selectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectFilter={filterHandler} />
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id} // *1
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </Card>
    );
}

export default items;

// ==== Notes ====
// *1: It helps to react knows every single list item in order to prevent react reloads all items every time a new one is added and fix the warning.