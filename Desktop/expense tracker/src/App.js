import React from 'react';
import Header from './components/header';
import Balance from './components/balance';
import './App.css';
import IncomeExpense from './components/incomeexpense';
import TransactionList from './components/transactionlist';
import AddTransaction from './components/addtransaction';

import {GlobalProvider} from "./context/globalstate.js";

function App() {
  return (
   <GlobalProvider>
    <Header />
    <div className="container">
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
    </div>
    
   </GlobalProvider>

  );
}

export default App;
