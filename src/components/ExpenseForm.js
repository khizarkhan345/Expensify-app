import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            notes: props.expense ? props.expense.notes: '',
            amount: props.expense ? (props.expense.amount /100).toString():'',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocus: false,
            error: ''
        
        };
    }
   

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({notes}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
          this.setState(() => ({amount}));
        }
        
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocus: focused}))
    }
    onSubmit = (e) => {
      e.preventDefault();
      
      if(!this.state.description || !this.state.amount){
         this.setState(() => ({error: 'Please, provide description and amount'}));
         console.log("Error");
      }else{
         this.setState(() => ({error: ''}));
         this.props.onSubmit({
             description: this.state.description,
             amount: parseFloat(this.state.amount, 10) * 100,
             createdAt: this.state.createdAt.valueOf(),
             notes: this.state.notes
         })
      }
    }
    render(){
        return (
            <div>
              {this.state.error && <p><b>{this.state.error}</b></p>}
              <form onSubmit={this.onSubmit}>
              <input
               type="text"
               placeholder="Description"
               autoFocus
               value = {this.state.description}
               onChange = {this.onDescriptionChange}
              />
              <input 
                type="number"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
              <SingleDatePicker
              date = {this.state.createdAt}
              onDateChange = {this.onDateChange}
              focused = {this.state.calenderFocus}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange = {() => false}
              />
              <textarea
                placeholder="Add a note for your expense (optional)"
                value={this.state.notes}
                onChange={this.onNotesChange}
              >
              </textarea>
              <button>Add Expense</button>
              </form>
            </div>
        )
    }

}