import React from 'react'

function Expense(props:any) {
    return (
        <div className="container">
        <div className="centered-div">
        <span>Title: {props.title}</span> <span>Amount: {props.amount}</span> <br />
        </div>
      </div>
    )
}


export default Expense