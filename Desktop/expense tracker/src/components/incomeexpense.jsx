import React,{useContext} from 'react'
import {globalContext} from '../context/globalstate'
function IncomeExpense(){
  const {transactions}=useContext(globalContext);
  const amount=transactions.map(transaction=>transaction.amount);
  const income=amount.filter(item=>item>0).reduce((amt,item)=>(amt+=item),0).toFixed(2);
  const expense=(amount.filter(item=>item<0).reduce((amt,item)=>(amt+=item),0)*-1).toFixed(2)
  
    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
    )
}
export default IncomeExpense;
