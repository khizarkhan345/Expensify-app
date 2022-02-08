import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
      calenderFocused: null
    }
   onDateChange = ( {startDate, endDate}) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
   }
   
   onFocusChange = (calenderFocused) => {
      this.setState = (() => ({ calenderFocused }));
   }
  render() {
    return  (
      <div>
        <input type="text" value={this.props.filters.text} onChange= {(e)=>
         {
          this.props.dispatch(setTextFilter(e.target.value));
          console.log(e.target.value);          
         }
        
        }   
        />
 
        <select value={this.props.filters.sortBy} onChange= { (e) => 
         {
           if(e.target.value === 'date'){
              this.props.dispatch(sortByDate())
           }else{
               this.props.dispatch(sortByAmount())
           }
         }
 
        }>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate = {this.props.filters.startDate}
          startDateId = ''
          endDate  = {this.props.filters.endDate}
          endDateId = ''
          onDatesChange = {this.onDateChange}
          focusedInput = {this.state.calenderFocused}
          onFocusChange ={this.onFocusChange}
          showClearDates = {true}
         />
      </div>
   );
 
  }
}

const PropsToState = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(PropsToState)(ExpenseListFilters);