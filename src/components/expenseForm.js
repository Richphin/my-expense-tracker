import { useState } from "react"
import { connect } from "react-redux";
import {addExpense} from "../actions/actions";


function Expenseform(props) {
    const [state,setstate] =useState({
        date:"",
        category:"",
        amount:"",
        item:"",
    })

    function handleonChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        let expenseId = 10000 + Math.random() * 10000000;
        let expense = { ...state, id: expenseId}
        props.addExpense(expense);
    }

return(
    <div>
        <h2 className="form" style={{color:"white"}}>Record Expense</h2>
        <br/>
        <div className="row" className="form">
            <label className="formlabel">Date</label><br/>
            <input type="date" name="date" value={state.date} onChange={handleonChange} className="inputfield"/>
        </div>
        <br/>
           
        <div className="form">
            <label style={{color:"white"}}>Category</label><br/>
            <select  name="category" value={state.category} onChange={handleonChange} className="inputfield">
            <option value="">select</option>
            <option value="Food and Drinks">Food and Drinks</option>
            <option value="Accomodation">Accomodation</option>
            <option value="Transpotation">Transpotation</option>
            <option value="Miscellaneous">Miscellaneous</option>
            </select>  
        </div>
        <br/>

        <div className="row" className="form">
            <label className="formlabel">Item/Service</label><br/>
            <input type="text" name="item" value={state.item} onChange={handleonChange} className="inputfield"/>
        </div>
        <br/>
        <div className="row" className="form">
            <label className="formlabel">Amount </label><br/>
            <input type="text" name="amount" value={state.amount} onChange={handleonChange} className="inputfield"/>
        </div>
        <br/>
        <br/>
        <div className="row" className="form">
            <button type="Submit" name="Submit" onClick={handleonSubmit} className="savebtn">Add Expense</button>
        </div>
    </div>
)



}
export default  connect(null, {addExpense})( Expenseform)