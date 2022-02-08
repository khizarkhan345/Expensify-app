import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListFilters from './ExpenseListFilters';
const Dashboard = () => (
    <div>
     <p>This is from my Dashboard component</p>
     <ExpenseListFilters />
     <ExpenseList />
     
    </div>
);

export default Dashboard;