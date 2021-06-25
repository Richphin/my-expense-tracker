import React from 'react'

export  function getAllExpenses() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('expenses')
       .get()
       .then((results)=>{
           let expenses =[];
           results.forEach((doc)=>{
               expenses.push(doc.data());
           });
           dispatch({
               type: 'ADD_ALL_EXPENSES',
               payload: expenses,
             });
       })
       .catch((err) => {
           console.log(err);
         });
    };
   
}

export function addExpense(newExpense) {
    return(dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        db.collection('expenses')
        .add(newExpense)
        .then(()=>{
            dispatch(
                {
                    type: "ADD_EXPENSE",
                    payload: newExpense,
                }
            );
        })
        .catch((err) => {
            console.log(err);
          });

    }

}

export  function deleteExpense(id) {
     
    return{
       type:"DELETE_EXPENSE",
       payload: id
    }
}

export  function updateExpense(id,updatedExpense) {
     
    return{
       type:"UPDATE_EXPENSE",
       payload:{ id:id , updatedExpenseinfo:updatedExpense}
    }
}


