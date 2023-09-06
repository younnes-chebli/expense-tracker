import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    useState();
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const inputChangeHandler = (e) => {
        if(e.target.name === 'title') {
            setEnteredTitle(e.target.value);
        }
        if(e.target.name === 'amount') {
            setEnteredAmount(e.target.value);
        }
        if(e.target.name === 'date') {
            setEnteredDate(e.target.value);
        }
    }

    return (
        <form>
            <div className="new-expense__contols">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" name="amount" onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" name="date" onChange={inputChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;