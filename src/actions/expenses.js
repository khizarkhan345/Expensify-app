import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense 
});


export const startAddExpense = (exportData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = exportData;

    const expense = {description, note, amount, createdAt};

    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })

  } 
} 
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// start Remove Expense

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() =>{
      dispatch(removeExpense({ id }));
    }) 
  }
}
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSE

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// SET START EXPENSES

export const startSetExpenses = () => {

  return (dispatch) => {
   return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = []

        snapshot.forEach((childSnapshot) => {
           expenses.push({
             id: childSnapshot.key,
             ...childSnapshot.val()
           });
        });

        dispatch(setExpenses(expenses));
    });
  }
}