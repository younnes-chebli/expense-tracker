import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
    const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expense.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;