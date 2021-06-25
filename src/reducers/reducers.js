const initialstate = { expenses:[]}
const appReducer =(state=initialstate,action) =>{
        switch (action.type) {

          case "ADD_ALL_EXPENSES":
            let expenses = action.payload;
            return { expenses: expenses };

          case "ADD_EXPENSE":
            
            return { ...state, expenses: [...state.expenses, action.payload] };
            
        case "DELETE_EXPENSE":
            var id=action.payload;
            var newExpense = state.expenses.filter((expense) => expense.id !==id);
            return {expenses:newExpense}
        
        case "UPDATE_EXPENSE":
            var id=action.payload.id;
            var updatedinfo=action.payload.updatedExpenseinfo;
            var Expenseafterupdate = state.expenses.map((expense) =>{
                if (expense.id===id) {
                  return updatedinfo
                }
                return expense
              })
              return{expenses:Expenseafterupdate}
              
        default:
            return state;
        }

}
export default appReducer;