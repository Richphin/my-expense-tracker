import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllExpenses } from "../actions/actions";
import ExpenseItem from "./expenses";



function Expenselist(props) {
    useEffect(()=>{
        props.getAllExpenses();
    },[]);
    return(
        <div>
            {props.expenses.map((expense) => (<ExpenseItem expense={expense}  />))}
           
        </div>
    )
    
    
    
    }
    function mapStateToProps(state) {
        return {
          expenses:state.userState.expenses,
        }
    }

    const mapDispatchToProps = {
        getAllExpenses,
      };

    export default  connect(mapStateToProps,mapDispatchToProps)(Expenselist);