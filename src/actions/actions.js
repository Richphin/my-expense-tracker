import React from 'react'

export  function getAllExpenses() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('expenses').onSnapshot(
        (results)=>{
            let expenses =[];
            results.forEach((doc)=>{
                expenses.push({...doc.data(), id: doc.id});
            });
            dispatch({
                type: 'ADD_ALL_EXPENSES',
                payload: expenses,
              });
        },
        (err) => {
            console.log(err);
          }
       );
       
    };
   
}

export function addExpense(newExpense) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').add(newExpense)  
        } catch (error) {
            console.log(error);
        }
    }  
}

export  function deleteExpense(id) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    } 

 }

 export  function updateExpense(id,updatedExpense) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').doc(id).update(updatedExpense);
        } catch (error) {
            console.log(error);
        }
    }

}