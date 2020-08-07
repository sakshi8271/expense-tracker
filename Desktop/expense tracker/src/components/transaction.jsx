import React,{useContext} from "react";
import {globalContext} from '../context/globalstate';
function Transaction({transaction}){
    const {deleteTransaction}=useContext(globalContext);
    const sign=transaction.amount>0?'+':'-';
    return( <li class={transaction.amount>0?'plus':'minus'}>
    {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
    <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
  </li> )
}

export default Transaction