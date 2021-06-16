import { connect } from "react-redux";
import ExpenseItem from "./expenses";


function Expenselist(props) {
    
    return(
        <div>
            {props.expenses.map((expense) => (<ExpenseItem expense={expense}  />))}
           
        </div>
    )
    
    
    
    }
    function mapStateToProps(state) {
        return {
          expenses:state.expenses,
        }
    }
    export default  connect(mapStateToProps,{})(Expenselist);