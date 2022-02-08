import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( { decrementBy = 1} = {}) => ({
   type: 'DECREMENT',
   decrementBy
});

const RESET = () => ({
    type: 'RESET'
 });

 const SET = ({value}) => ({
    type: 'SET',
    value
 });
const store = createStore((state = {count: 0}, action) => {
    switch(action.type){
        

        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count : action.value
            }            
        default:
            return state;
        
    }
   
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));



store.dispatch(decrementCount());

store.dispatch(RESET());

store.dispatch(SET({value: 202}));



