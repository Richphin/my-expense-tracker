import React from 'react'
import Expenseform from '../components/expenseForm'
import Expenselist from '../components/Expenselist'


function Dashboard() {
    return (
      <div className="container ">
      <div className="">
        <div className="col-md-4 col-sm-12 formcontainer">
          <Expenseform />
        </div>
        <div className="col-md-8 col-sm-12 ">
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

export default Dashboard
