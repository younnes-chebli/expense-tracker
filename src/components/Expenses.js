import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
        <div className='expenses'>
            {props.items.length === 0 ? <p className='no-expense'>No Expenses!</p> :
                props.items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                    />
                ))
            }
        </div>
    );
}

export default Expenses;