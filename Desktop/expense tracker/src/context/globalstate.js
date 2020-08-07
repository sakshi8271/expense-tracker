import React,{createContext,useReducer} from "react"
import Appreducer from "./Appreducer";


const initialState={
    transactions:[
        {id:1,text:'flowers',amount:-30},
        {id:2,text:'income',amount:300},
        {id:3,text:'sajs',amount:-40}
    ]
}

export const globalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
   const [state, dispatch] = useReducer(Appreducer, initialState);

   function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
   }
   function addTransaction(transaction){
       dispatch({
           type:'ADD_TRANSACTION',
           payload: transaction
       })
   }
   return(
       <globalContext.Provider value={{
           transactions:state.transactions,
           deleteTransaction,
           addTransaction
       }}>
           {children}
        </globalContext.Provider>
   )
}