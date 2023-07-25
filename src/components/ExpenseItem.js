import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;