import { useState } from "react"
import { Modal, } from "react-bootstrap"

import { connect } from "react-redux";
import {deleteExpense} from "../actions/actions";
import EditExpenseform from "./editExpenseform";

function ExpenseItem(props) {
    const [displaymodal,setshowmodal] =useState(false);
    function showModal() {
        setshowmodal(true);
    }

    function hideModal() {
        setshowmodal(false);
    }
    
    return(
        <div>

            


            <div className="row">
                <div className="col-md-3 col-sm-4 text-center">   
                    <h5 style={{fontWeight:"bold", fontSize:"14px"}}>{props.expense.category}</h5>
                </div>

                <div className="col-md-3 col-sm-4 text-center">
                <h5 style={{fontWeight:"bold", fontSize:"14px"}}>{props.expense.item}</h5>
                </div>

                <div className="col-md-2 col-sm-4 text-center">
                <h5 style={{fontWeight:"bold", fontSize:"14px"}}>{props.expense.amount}</h5>
                </div>

                <div className="col-md-2 col-sm-4 text-center" >
                <h6 style={{fontWeight:"bold", fontSize:"14px"}}>{props.expense.date}</h6>
                </div>

                <div className="col-md-2 col-sm-4">
                <div className="col-md-6 col-sm-6">
                        <button className="updatebtn" onClick={showModal} >
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                            <Modal show={displaymodal} onHide={hideModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Expense</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <EditExpenseform  expense={props.expense} hideModal={hideModal}/>
                                    
                                </Modal.Body>


                            </Modal>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <button className="deletebtn" onClick={() => {props.deleteExpense(props.expense.id)}}>
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
          
           
        </div>
    )
    
    
    
    }
    let mapDispatchToProps= {
        deleteExpense,
    }
    let mapStateToProps = () =>{}

    export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
    