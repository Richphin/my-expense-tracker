import React from 'react'

export function addExpense(newExpense) {
    return{
        type:"ADD_EXPENSE",
        payload: newExpense
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


