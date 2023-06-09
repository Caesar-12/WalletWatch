import React, { useState } from 'react'
import Expense from './Expense';

let logo = require("../../../Assets/images/mango.png");

function Mybudget() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    // array to store all the transactions in form of objects of title and amount
    const [transactions, setTransactions] = useState([{ title: 'Salary', amount: 5000 }, { title: 'Book', amount: -100 }, { title: 'Camera', amount: -500 }]);

    function handleSubmit(e:any) {
        e.preventDefault();
        addExpense();
        console.log("Submitted");
    }

    function addExpense() {
        // get the amount and title from state varaibles and create a new object from it
        const newExpense = { title, amount };
        setTransactions([...transactions, newExpense]);
        setTitle('');
        setAmount(0);
        console.log(transactions);
    }

    return (
        <>
        <div className="profile">
        <img src={logo} style={{height: "40px"}} className="m-1" alt=''/>
                <h2>John Doe</h2>
                <p>Email: john.doe@example.com</p>
             <p>Location: New York, USA</p>
              <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor magna non condimentum tincidunt.</p>
               </div>
            {transactions.map((transaction) => {
                return <Expense title={transaction.title} amount={transaction.amount} />
            })}
            
        </>
    )
}

export default Mybudget