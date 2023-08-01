import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.items.length === 0 ? <p className='no-expense'>No Expenses!</p> :
                props.items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                    />
                ))
            }
        </Card>
    );
}

export default Expenses;