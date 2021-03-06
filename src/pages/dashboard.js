import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import Expenseform from '../components/expenseForm'
import Expenselist from '../components/Expenselist'




function Dashboard(props) {
  function handleLogout(){
    props.logout()
}
    return (
      <div className="container ">
      <div className="">
        <div className="col-md-4 col-sm-12 formcontainer">
          <Expenseform />
        </div>
        <div className="col-md-8 col-sm-12 ">
        <button type="button" 
          name="Submit" 
          onClick={handleLogout}
          style={{backgroundColor:"tomato" , color:"white" ,  float:"right"}}
          >Logout</button>
          <h2 className="users text-center">Expenses</h2>
          <div className="row">
          <div className="col-md-3 col-sm-3 text-center"><h4>category</h4></div>
          <div className="col-md-3 col-sm-3 text-center"><h4>Item/Service</h4></div>
          <div className="col-md-2 col-sm-2 text-center"><h4>Amount</h4></div>
          <div className="col-md-2 col-sm-2 text-center"><h4>Date</h4></div>
          <div className="col-md-2 col-sm-2 text-center"><h4>Edit/Delete</h4></div>
          </div>
          <Expenselist/>
        </div>
      </div>
    </div>
    )
}

export default  connect(null,{logout})(Dashboard)
