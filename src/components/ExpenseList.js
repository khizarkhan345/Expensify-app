import React from 'react';
import {connect} from 'react-redux';
import expenses from '../reducers/expenses';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
   <div>
     <h1>Expense List</h1>
     {
         props.expenses.map((expense) => {
             return <ExpenseListItem key={expense.id} {...expense} />;
         })
     }
     
   </div>
);

const PropsToState = (state) => {
    return {
    expenses: selectExpenses(state.expenses, state.filters)
    }

}

const ConnectedState = connect(PropsToState)(ExpenseList);

export default ConnectedState;