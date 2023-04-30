//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialStates = {
    counter: {
        value: 0,
        showCounter: true
    },
    auth: {
        isAuthenticated: false
    }
}

const counterSlice = createSlice({
    name: 'conter',
    initialState: initialStates.counter,
    reducers: {
        increment(state, action) {
            state.value = state.value + action.payload;
        },
        decrement(state, action) {
            state.value = state.value - action.payload;
        },
        toggl(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialStates.auth,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

const counterActions = counterSlice.actions;
const authActions = authSlice.actions;

export default store;
export {
    counterActions,
    authActions
}

// Normal Redux
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