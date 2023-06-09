import React, { useState } from 'react'
import Expense from './Expense';

function Budget() {
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
        <section>
        <article>
        <h1 >Wallet Watch</h1>
    <p>Wallet Watch is  intended to solve the challenge of tracking and managing expenses for 
        individuals or organizations. The project aims to provide a user-friendly web-based platform that allows users to track their expenses ,
         create budgets , and monitor their spending habits in real time.</p>
    <p>It is not intended to provide financial advice or investment recommendations,   
        nor can it guarantee the accuracy of the data entered by users.
         </p>
  </article>
            <div className="container-fluid mt-3" pt-3 >

                <form onSubmit={handleSubmit}>
                    <fieldset >
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title of Transaction"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e:any) => { setAmount(e.target.value) }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </fieldset>
                </form>
            </div>
            <hr />
            {transactions.map((transaction) => {
                return <Expense title={transaction.title} amount={transaction.amount} />
            })}
            </section>
        </>
    )
}

export default Budget