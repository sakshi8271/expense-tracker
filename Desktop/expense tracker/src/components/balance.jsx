import React,{useContext} from 'react';
import {globalContext} from "../context/globalstate";

function Balance(){
const {transactions}= useContext(globalContext);
const amounts=transactions.map(transaction=>transaction.amount);
const total=amounts.reduce((amt,item)=>(amt+=item),0).toFixed(2);
    return(
       <div>
           <h4>Your Balance</h4>
    <h1>${total}</h1>
       </div>
    )
}
export default Balance;