import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 2, 14);
    // const expenseTitle = 'Car Insuracce';
    // const expenseAmount = 268.98;
    
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{`$${props.amount}`}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;