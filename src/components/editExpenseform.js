import react, { useState } from "react"
import { connect } from "react-redux";
import { updateExpense } from "../actions/actions";


function EditExpenseform(props) {
    const [state,setstate] =useState({
        date: props.expense.date,
        category: props.expense.category,
        amount: props.expense.amount,
        item: props.expense.item,
    })

    function handleonChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        
        let expense = { ...state, id: props.expense.id};
        props.updateExpense(props.expense.id, expense);
        props.hideModal();
    }

return(
    <div>
         <h2 className="signup form">Edit Expense</h2>
        <div className="row" className="form">
            <label className="formlabel">Date</label><br/>
            <input type="date" name="date" value={state.date} onChange={handleonChange} className="inputfield"/>
        </div>
        
           
        <div className="row" className="form">
            <label className="">Category</label><br/>
            <select  name="category" value={state.category} onChange={handleonChange} className="inputfield">
            <option value="">select</option>
            <option value="Food and Drinks">Food and Drinks</option>
            <option value="Accomodation">Accomodation</option>
            <option value="Transpotation">Transpotation</option>
            <option value="Miscellaneous">Miscellaneous</option>
            </select>  
        </div>

        <div className="row" className="form">
            <label className="formlabel">Item/Service</label><br/>
            <input type="text" name="item" value={state.item} onChange={handleonChange} className="inputfield"/>
        </div>
        
        <div className="row" className="form">
            <label className="formlabel">Amount </label><br/>
            <input type="text" name="amount" value={state.amount} onChange={handleonChange} className="inputfield"/>
        </div>
        <br/>
        <div className="row" className="form">
            <button type="Submit" name="Submit" onClick={handleonSubmit} className="createbtn">Update Expense</button>
        </div>
    </div>
)



}
let mapDispatchToProps= {
    updateExpense,
};
let mapStateToProps = () => {};
export default connect (mapStateToProps, mapDispatchToProps) (EditExpenseform);