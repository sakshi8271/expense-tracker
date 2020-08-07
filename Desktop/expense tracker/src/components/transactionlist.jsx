import React,{useContext}from "react";
import Transaction from "./transaction";
import {globalContext} from "../context/globalstate";
function TransactionList(){
  const {transactions} = useContext(globalContext)

    return(
        <div>
             <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction=>(
          <Transaction key={transaction.id} transaction={transaction}/>
        )
         
        )}
        
      </ul>
        </div>
       
      
    )
}
export default TransactionList