import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slices';
import authRedcuer from './auth-slices';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authRedcuer
    }
});

export default store;



// Normal Redux
// import { createStore } from 'redux';
//
// const counterReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'INCREMENT': return { counter: state.counter + action.amount, showCounter: state.showCounter};
//         case 'DECREMENT': return { counter: state.counter - action.amount, showCounter: state.showCounter };
//         case 'TOGGLE': return { showCounter: !state.showCounter, counter: state.counter };
//         default: return state;
//     }
// }

// const store = createStore(counterReducer);

//export default store;