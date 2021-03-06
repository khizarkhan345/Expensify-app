
import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// ADD expense action

const addExpense = (
    {
        description = "",
         notes = " ",
          amount = 0,
           createdAt=0 
        } = {}
        ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
   type: "REMOVE_EXPENSE",
   id: id
});

const editExpense = (id, updates) => ({
   type: "EDIT_EXPENSE",
   id,
   updates
});

const setTextFilter = (newText = '') => ({
    type: "SET_TEXT",
    newText
});

const sortByAmount = () => ({
   type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
   type: "SORT_BY_DATE"
});

const setStartDate = (SDate = undefined) => ({
   type: "SET_START_DATE",
   SDate
});

const setEndDate = (EDate = undefined) => ({
   type: "SET_END_DATE",
   EDate
});
// Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ... state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => {
                    return action.id !== id
                })
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === action.id){
                   return {
                       ...expense,
                   ...action.updates
                   }
                }else{
                    return expense;
                }
               
            });       
        default:
            return state;
    }
}



// Filter Reducer
const filterReducerDefaultState = {
    text: ' ',
  sortBy: 'date',
  startDate:  undefined,
  endDate: undefined
 };

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
      case "SET_TEXT":
          return {
           ...state,
           text: action.newText   
          }
       case "SORT_BY_AMOUNT":
           return {
               ...state,
               sortBy: 'amount'
           }
       case "SORT_BY_DATE":
           return {
               ...state,
               sortBy: 'date'
           }
       case "SET_START_DATE":
           return {
               ...state,
               startDate: action.SDate
           }   
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.EDate
            }             
          //state.map((expense) => {
            // return {
              //   ...expense,
                // text: newText
             //}
         // })  
      default:
          return state;
    }
}

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//     //  return expenses.filter((expense) => {
//     //     const  startDateMatch = typeof startDate !== 'number' ||  expense.createdAt >= startDate;
//     //     const  endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//     //     const  textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
//     //     //const textMatch = true;

//     //       return startDateMatch && endDateMatch && textMatch;
//     //  }).sort((a, b) => {
//     //     if(sortBy === 'date'){
//     //         return a.createdAt < b.createdAt ? 1 : -1
//     //     }else if (sortBy === 'amount'){
//     //          return a.amount < b.amount ? 1 : -1
//     //      }

//     //  })

//      return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
//         return startDateMatch && endDateMatch && textMatch;
//       })//.sort((a, b) => {
//         //if (sortBy === 'date') {
//          // return a.createdAt < b.createdAt ? 1 : -1;
//         //} else if (sortBy === 'amount') {
//          // return a.amount < b.amount ? 1 : -1;
//         //}
//       //});
// }

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
const store = createStore( combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
   })
 );
 
 store.subscribe(() => {
     const state = store.getState();
     //console.log(state);
     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    
 });
 
    const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: 11000}));
    const expenseTwo = store.dispatch(addExpense({description: "Coffee", amount: 500, createdAt: 1000}));

    // store.dispatch(removeExpense({id: expenseOne.expense.id}));

    // store.dispatch(editExpense(expenseTwo.expense.id, {amount: 700}));

    //store.dispatch(setTextFilter('Rent'));

    // store.dispatch(sortByAmount());

    // store.dispatch(sortByDate());

//   store.dispatch(setStartDate(1225));
//  store.dispatch(setStartDate());
  // store.dispatch(setEndDate(12255));
 
const demoState = {
    expenses: [{
        id: 'adfadf',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0 
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

